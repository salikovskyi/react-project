import css from "./CalorieModal.module.css";
import { Link } from "react-router-dom";
import {
  daySummary,
  notAllowedProducts,
} from "../../../redux/userData/userDataSelectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../_styled/Button.styled";

export default function CalorieModal() {
  const notAllowedProducts = useSelector(notAllowedProducts);
  const daySummary = useSelector(daySummary);
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const filterProducts = notAllowedProducts.filter((product) =>
    product.toLowerCase().includes(value)
  );

  return (
    <div className={css.modal_section}>
      <h2 className={css.modal_title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </h2>
      <p className={css.modal_daySummary}>
        {daySummary} <span className={css.modal_span}>ккал</span>
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
          <li key={id}>
            {product}
          </li>
        ))}
      </ul>
      <Link to='/registration'>
        <Button>Начать худеть</Button>
      </Link>
    </div>
  );
}
