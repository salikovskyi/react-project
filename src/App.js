import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, registerUser } from "./redux/auth/authOperations";
import { useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import CalorieForm from './components/DailyRateForm/CalorieForm'
import LoginForm from "./components/LoginForm/LoginForm";
import CalculatorPage from "./pages/Calculator/Calculator";
import CalorieModal from "./components/DailyRateForm/CalorieModal/CalorieModal";
function App() {
  return (
      <CalculatorPage/>
  );
}

export default App;
