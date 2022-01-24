import styles from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
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
