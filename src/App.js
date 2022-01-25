import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useSelector } from "react-redux";
import {
  loginUser,
  refreshUser,
  registerUser,
} from "./redux/auth/authOperations";
import { useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import CalendarPicker from "./components/CalendarPicker";
import CalorieForm from "./components/DailyRateForm/CalorieForm";
import LoginForm from "./components/LoginForm/LoginForm";
import CalculatorPage from "./pages/Calculator/Calculator";
import CalorieModal from "./components/DailyRateForm/CalorieModal/CalorieModal";
import ProductForm from "./components/ProductForm/ProductForm";
function App() {
  return (
    <>
      <CalendarPicker />
      <ProductForm />
    </>
  );
}

export default App;
