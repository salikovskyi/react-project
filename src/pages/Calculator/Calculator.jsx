import css from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
export default function CalculatorPage() {
  return (
    <div className={css.calc_page}>
      {/* <ContainerStyled flex={'flex'}> */}
        <CalorieForm />
        <FooterInfo />
      {/* </ContainerStyled> */}
    </div>
  );
}
