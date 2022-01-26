import styles from "./MainPage.module.css";
import MainCalorieForm from "../../components/MainCalorieForm";
import ContainerStyled from "../../components/_styled/Container.styled";
import CalorieModal from "../../components/DailyRateForm/CalorieModal";
import { isModalOpen } from "../../redux/userData/userDataSelectors";
import { useSelector } from "react-redux";

export default function CalculatorPage() {
  const modalOpen = useSelector(isModalOpen);
  return (
    // <div className={styles.bg}>
      <ContainerStyled>
        <div className={styles.position}>
          <MainCalorieForm />
          {modalOpen && <CalorieModal />}
        </div>
      </ContainerStyled>
    // </div>
  );
}
