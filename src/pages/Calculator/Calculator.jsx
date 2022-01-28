import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import { react } from "@babel/types";
import CalorieModal from "../../components/DailyRateForm/CalorieModal";
import {
  getFirstEntry,
  isModalOpen,
} from "../../redux/userData/userDataSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserId } from "../../redux/auth/authSelectors";
import { useEffect } from "react";
import { rootClass } from "../../redux/userData/userDataSlice";
import { fetchUserInfo } from "../../redux/auth/authOperations";

export default function CalculatorPage() {
  const id = useSelector(getUserId);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(rootClass("SlimCalc"));
    // firstEntry && dispatch(fetchUserInfo());
  }, []);

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
