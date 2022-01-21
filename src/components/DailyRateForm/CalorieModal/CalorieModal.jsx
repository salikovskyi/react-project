import css from "./CalorieModal.module.css";
import { Link } from "react-router-dom";
import {
  daySummary,
  notAllowedProducts,
} from "../../redux/dailyRate/dailyRateSelector";
import { useSelector } from "react-redux";

export default function CalorieModal() {
  const notAllowedProducts = useSelector(notAllowedProducts);
  const daySummary = useSelector(daySummary);

  return (
    <div className={css.modal_section}>
      <h2 className={css.modal_title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </h2>
      <p className={css.modal_daySummary}>
        {daySummary} <span className={css.modal_span}>ккал</span>
      </p>
    </div>
  );
}
