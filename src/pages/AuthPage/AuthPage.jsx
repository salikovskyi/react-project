import styles from "./AuthPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ContainerStyled from "../../components/_styled/Container.styled";
import LoginForm from "../../components/LoginForm";
import { useRouteMatch } from "react-router-dom";
export default function AuthPage() {
  const { url } = useRouteMatch();

  return (
      <ContainerStyled>
        {url === "/registration" && <RegistrationForm />}
        {url === "/login" && <LoginForm />}
      </ContainerStyled>
  );
}
