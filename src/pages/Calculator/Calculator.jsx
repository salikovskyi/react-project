import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import CalorieModal from "../../components/DailyRateForm/CalorieModal/CalorieModal";
import { react } from "@babel/types";

export default function CalculatorPage() {
  return (
    <div className={styles.bg}>
      <ContainerStyled>
        <div className={styles.position}>
          <CalorieForm />
          <FooterInfo />
        </div>
      </ContainerStyled>
    </div>
  );
}
