import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import { react } from "@babel/types";
import CalorieModal from '../../components/DailyRateForm/CalorieModal'
import { isModalOpen } from "../../redux/userData/userDataSelectors";
import { useSelector } from "react-redux";

export default function CalculatorPage() {

    const modalOpen = useSelector(isModalOpen)
  return (
    <div className={styles.bg}>
      <ContainerStyled>
        <div className={styles.position}>
          <CalorieForm />
            {modalOpen && <CalorieModal/>}
          <FooterInfo />
        </div>
      </ContainerStyled>
    </div>
  );
}
