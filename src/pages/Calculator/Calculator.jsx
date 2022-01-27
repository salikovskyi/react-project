import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import { react } from "@babel/types";
import CalorieModal from "../../components/DailyRateForm/CalorieModal";
import {
  getFirstEntry,
  getIsDaySummaryExist,
  isModalOpen,
} from "../../redux/userData/userDataSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserId } from "../../redux/auth/authSelectors";
import { useEffect } from "react";
import { rootClass } from "../../redux/userData/userDataSlice";
import { fetchUserInfo } from "../../redux/auth/authOperations";
import { useHistory } from "react-router-dom";

export default function CalculatorPage() {
  const id = useSelector(getUserId);
  const dispatch = useDispatch();
  const isDaySummaryExist = useSelector(getIsDaySummaryExist);
  const history = useHistory();

  useEffect(() => {
    dispatch(rootClass("SlimCalc"));
    !isDaySummaryExist && dispatch(fetchUserInfo());
  }, []);

  // useEffect(() => {
  //   isDaySummaryExist && history.push("/diary");
  //   console.log("IDSE", isDaySummaryExist);
  // }, [isDaySummaryExist]);

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
