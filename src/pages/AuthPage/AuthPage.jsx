import styles from "./AuthPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ContainerStyled from "../../components/_styled/Container.styled";
import LoginForm from "../../components/LoginForm";
export default function AuthPage() {
  return (
    <div className={styles.registerSection}>
      <ContainerStyled>
        {/* <RegistrationForm/> */}
        <LoginForm />
      </ContainerStyled>
    </div>
  );
}
