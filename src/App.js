import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, registerUser } from "./redux/auth/authOperations";
import { useEffect } from "react";
import FooterInfo from "./components/FooterInfo";
import CalculatorPage from "./pages/Calculator/Calculator";

function App() {
  return (
    <div>
      <CalculatorPage/>
    </div>
  );
}

export default App;
