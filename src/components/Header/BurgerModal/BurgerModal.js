import css from "./BurgerModal.module.css";

import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const modalRoot = document.getElementById("modal-root");

export default function BurgerModal({ active, closeMenu }) {
  return ReactDOM.createPortal(
    <div
      className={`${
        active ? css.burger_modal_active : css.burger_modal_closed
      } ${css.burger_modal}`}
    >
      <nav>
        <ul>
          <div className={css.burger_login_navlinks}>
            <NavLink
              onClick={closeMenu}
              to="/diary"
              className={css.burger_linknav}
              activeClassName={css.burger_activeLink}
            >
              дневник
            </NavLink>

            <NavLink
              onClick={closeMenu}
              to="/calculator"
              className={css.burger_linknav}
              activeClassName={css.burger_activeLink}
            >
              калькулятор
            </NavLink>
          </div>
        </ul>
      </nav>
    </div>,
    modalRoot
  );
}
