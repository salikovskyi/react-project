import styles from "./AuthPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ContainerStyled from "../../components/_styled/Container.styled";
import LoginForm from "../../components/LoginForm";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootClass } from "../../redux/userData/userDataSlice";
import { getError } from "../../redux/auth/authSelectors";
import Notiflix from "notiflix";

export default function AuthPage() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(rootClass("SlimLogin"));
  }, []);

  return (
    <ContainerStyled>
      {url === "/registration" && <RegistrationForm />}
      {url === "/login" && <LoginForm />}
    </ContainerStyled>
  );
}
