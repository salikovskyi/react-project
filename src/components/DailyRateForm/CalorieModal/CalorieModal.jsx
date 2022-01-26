import css from "./CalorieModal.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  calRate,
  notAllowedProducts,
} from "../../../redux/userData/userDataSelectors";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Button from "../../_styled/Button.styled";
import { closeModal } from "../../../redux/userData/userDataSlice";
const portalContainer = document.getElementById("modal-root");

export default function CalorieModal() {
  const notAllowedList = useSelector(notAllowedProducts);
  const calRated = useSelector(calRate);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const filterProducts = notAllowedList.filter((product) =>
    product.toLowerCase().includes(value)
  );

  useEffect(() => {
    // Your code here
    window.addEventListener("keydown", onEscFuckingClose);
    return () => {
      window.removeEventListener("keydown", onEscFuckingClose);
    };
  }, []);

  function closeFuckingModal() {
    dispatch(closeModal());
  }

  function onEscFuckingClose(e) {
    if (e.code === "Escape") {
      dispatch(closeModal());
    }
  }

  const modal = (
    <div id="overlay" className={css.overlay}>
      <div className={css.modal_section}>
        <div className={css.wrapper}>
          <h2 className={css.modal_title}>
            Ваша рекомендуемая суточная норма калорий составляет
          </h2>
          <svg
            onClick={closeFuckingModal}
            className={css.svg}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z"
              fill="black"
            />
          </svg>
          <p className={css.modal_daySummary}>
            {calRated} <span className={css.modal_span}>ккал</span>
          </p>
          <div className={css.productss}>
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
                  {id + 1}.{product}
                </li>
              ))}
            </ul>
            <Link to="/registration">
              <Button className={css.button}>Начать худеть</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, portalContainer);
}
