import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import { react } from "@babel/types";
import CalorieModal from "../../components/DailyRateForm/CalorieModal";
import { isModalOpen } from "../../redux/userData/userDataSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../redux/auth/authSelectors";
import { useEffect } from "react";
import { rootClass } from "../../redux/userData/userDataSlice";

export default function CalculatorPage() {
  const id = useSelector(getUserId);
  const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(rootClass('SlimCalc'))},
 [])
  

  const modalOpen = useSelector(isModalOpen);
  return (
      <ContainerStyled>
        <div className={styles.position}>
          <CalorieForm userId={id} />
          {modalOpen && <CalorieModal />}
          <FooterInfo />
        </div>
      </ContainerStyled>
  );
}
