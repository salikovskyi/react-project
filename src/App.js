// import Loader from "./components/Loader";
import "react-datepicker/dist/react-datepicker.css";

import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import ContainerStyled from "./components/_styled/Container.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserInfo,
  loginUser,
  refreshUser,
  registerUser,
} from "./redux/auth/authOperations";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import { getIsLoading } from "./redux/auth/authSelectors";
import { useEffect } from "react";
import Header from "./components/Header";
import { TailSpin } from "react-loader-spinner";

const HomePage = lazy(() => import("./pages/MainPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const DiaryPage = lazy(() => import("./pages/DiaryPage"));
const Calculator = lazy(() => import("./pages/Calculator"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  const isLoading = useSelector(getIsLoading);
  return (
    <div className="hui">
      {isLoading ? (
        <TailSpin color="#00BFFF" height={80} width={80} className="loader" />
      ) : (
        <>
          <Header />
          <Switch>
            <Suspense
              fallback={
                <TailSpin
                  color="#00BFFF"
                  height={80}
                  width={80}
                  className="loader"
                />
              }
            >
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/diary">
                <AuthPage />
              </PublicRoute>
              <PublicRoute path="/registration" restricted redirectTo="/diary">
                <AuthPage />
              </PublicRoute>
              <PrivateRoute path="/diary" redirectTo="/login">
                <DiaryPage />
              </PrivateRoute>
              <PrivateRoute path="/calculator">
                <Calculator />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
