import styles from "./AuthPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ContainerStyled from "../../components/_styled/Container.styled";
import LoginForm from "../../components/LoginForm";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { rootClass } from "../../redux/userData/userDataSlice";
export default function AuthPage() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(rootClass('SlimLogin'))},
 [])
  
 return (
      <ContainerStyled>
        {url === "/registration" && <RegistrationForm />}
        {url === "/login" && <LoginForm />}
      </ContainerStyled>
  );
}
