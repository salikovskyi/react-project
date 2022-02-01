import "react-datepicker/dist/react-datepicker.css";
import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserInfo } from "./redux/auth/authOperations";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import {
  getIsLoading,
  getIsLoggedIn,
  getToken,
} from "./redux/auth/authSelectors";
import { useEffect } from "react";
import Header from "./components/Header";
import { TailSpin } from "react-loader-spinner";
import { rootClass } from "./redux/userData/userDataSlice";
import { getRootClass, isModalOpen } from "./redux/userData/userDataSelectors";

const HomePage = lazy(() => import("./pages/MainPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const DiaryPage = lazy(() => import("./pages/DiaryPage"));
const Calculator = lazy(() => import("./pages/Calculator"));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const IsLoggedIn = useSelector(getIsLoggedIn);
  const chooseClass = useSelector(getRootClass);
  const modalOpen = useSelector(isModalOpen);
  const token = useSelector(getToken);

  useEffect(() => {
    token && dispatch(fetchUserInfo());
    dispatch(rootClass("SlimMom"));
  }, []);

  return (
    <div className={`${chooseClass}`}>
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
              <PublicRoute path="/login" restricted redirectTo="/calculator">
                <AuthPage />
              </PublicRoute>
              <PublicRoute path="/registration" restricted redirectTo="/login">
                <AuthPage />
              </PublicRoute>
              <PrivateRoute path="/diary" redirectTo={!IsLoggedIn && "/login"}>
                <DiaryPage />
              </PrivateRoute>
              <PrivateRoute
                path="/calculator"
                redirectTo={!IsLoggedIn && "/login"}
              >
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
