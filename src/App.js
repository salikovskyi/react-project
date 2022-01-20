import { Loader } from "./components/Loader";
import ContainerStyled from "./components/_styled/Container.styled";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, registerUser } from "./redux/auth/authOperations";
import { useEffect } from "react";
function App() {
  return (
    <ContainerStyled>
      <h1>App</h1>
    </ContainerStyled>
  );
}

export default App;
