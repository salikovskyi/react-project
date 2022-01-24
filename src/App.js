import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useSelector } from "react-redux";
import {
  loginUser,
  refreshUser,
  registerUser,
} from "./redux/auth/authOperations";
import { useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import CalorieForm from "./components/DailyRateForm/CalorieForm";
import LoginForm from "./components/LoginForm/LoginForm";
import CalculatorPage from "./pages/Calculator/Calculator";
import CalorieModal from "./components/DailyRateForm/CalorieModal/CalorieModal";
function App() {
  return (
    <AuthPage/>
    )
}

export default App;
