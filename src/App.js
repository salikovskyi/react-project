import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, registerUser } from "./redux/auth/authOperations";
import { useEffect } from "react";

import CalorieForm from './components/DailyRateForm/CalorieForm'
function App() {
  return (
    <ContainerStyled>
      <h1>app</h1>
      <CalorieForm/>
    </ContainerStyled>
  );
}

export default App;
