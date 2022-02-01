import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import CalorieModal from "../../components/DailyRateForm/CalorieModal";
import {
  isModalOpen,
  daySummary,
} from "../../redux/userData/userDataSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserId } from "../../redux/auth/authSelectors";
import { useEffect } from "react";
import { rootClass } from "../../redux/userData/userDataSlice";
import { dayInfo } from "../../redux/userData/userDataOperations";
import dateFormatter from "../../utils/helpers/dateFormatter";

export default function CalculatorPage() {
  const id = useSelector(getUserId);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const sum = useSelector(daySummary);
  const { dailyRate } = sum;

  useEffect(() => {
    dispatch(rootClass("SlimCalc"));
    isLoggedIn && dispatch(dayInfo({ date: dateFormatter }));
  }, [dailyRate, dispatch]);

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
