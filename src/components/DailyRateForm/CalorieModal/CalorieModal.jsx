import css from "./CalorieModal.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  calRate,
  notAllowedProducts,
} from "../../../redux/userData/userDataSelectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../_styled/Button.styled";

const portalContainer = document.getElementById("modal-root");

export default function CalorieModal() {
  const notAllowedList = useSelector(notAllowedProducts);
  const calRated = useSelector(calRate);
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const filterProducts = notAllowedList.filter((product) =>
    product.toLowerCase().includes(value)
  );

  const modal = (
    <div className={css.modal_section}>
        <div className={css.wrapper}>
        <h2 className={css.modal_title}>
          Ваша рекомендуемая суточная норма калорий составляет
        </h2>
        <p className={css.modal_daySummary}>
          {calRated} <span className={css.modal_span}>ккал</span>
        </p>
        <input
          className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
        />
        <p className={css.products_title}>
          Продукты которые вам не стоит употреблять
        </p>
        <ul className={css.scroller}>
          {filterProducts.map((product, id) => (
            <li key={id} className={css.products_item}>
              {id +1}.{product}
            </li>
          ))}
        </ul>
        <Link to="/registration">
          <Button className={css.button}>Начать худеть</Button>
        </Link>
        </div>
    </div>
  );
  return ReactDOM.createPortal(modal, portalContainer);
}
