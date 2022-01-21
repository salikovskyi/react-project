import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, registerUser } from "./redux/auth/authOperations";
import { useEffect } from "react";
import RegistrationForm from "./components/RegisterForm/RegistrationForm";

import CalorieForm from './components/DailyRateForm/CalorieForm'
function App() {
  return (
    <ContainerStyled>
      <h1>app</h1>
      <CalorieForm/>
      <RegistrationForm/>
    </ContainerStyled>
  );
}

export default App;
