import css from "./CalorieModal.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  daySummary,
  notAllowedProducts,
} from "../../../redux/userData/userDataSelectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../_styled/Button.styled";

export default function CalorieModal() {
  const portalContainer = document.getElementById("modal-root");
  const notAllowedList = useSelector(notAllowedProducts);
  const daySum = useSelector(daySummary);
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const filterProducts = notAllowedList.filter((product) =>
    product.toLowerCase().includes(value)
  );

  return ReactDOM.createPortal(
    <div className={css.modal_section}>
      <h2 className={css.modal_title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </h2>
      <p className={css.modal_daySummary}>
        {daySum} <span className={css.modal_span}>ккал</span>
      </p>
      <div>
        <input
          className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
        />
      </div>
      <p>Продукты которые вам не стоит употреблять</p>
      <ul>
        {filterProducts.map((product, id) => (
          <li key={id}>{product}</li>
        ))}
      </ul>
      <Link to="/registration">
        <Button>Начать худеть</Button>
      </Link>
    </div>,
    portalContainer
  );
}
