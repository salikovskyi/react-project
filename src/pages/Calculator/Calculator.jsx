import { useState } from "react";
import css from "./Calculator.module.css";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import FooterInfo from "../../components/FooterInfo";
import ContainerStyled from "../../components/_styled/Container.styled";
import CalorieModal from "../../components/DailyRateForm/CalorieModal/CalorieModal";
import { react } from "@babel/types";

export default function CalculatorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={css.calc_page}>
      {/* <ContainerStyled flex={'flex'}> */}
      <CalorieForm openModal={openModal} />
      {isModalOpen && <CalorieModal />}
      <FooterInfo />
      {/* </ContainerStyled> */}
    </div>
  );
}
