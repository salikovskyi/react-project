import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { getIsLoggedIn } from "../redux/auth/authSelectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
