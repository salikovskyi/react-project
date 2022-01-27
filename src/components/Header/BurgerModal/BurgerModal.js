import css from './BurgerModal.module.css'
// import { createPortal } from "react-dom";
// import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const modalRoot = document.querySelector("#modal-root");

export default function BurgerModal({active}) {
    return (

        <div className={`${active ? css.burger_modal_active : css.burger_modal_closed} ${css.burger_modal}`}>
            <nav>
                <ul>
                <div className={css.burger_login_navlinks}>
                <NavLink
                  to="/diary"
                  className={css.burger_linknav}
                  activeClassName={css.burger_activeLink}
                >
                  дневник
                </NavLink>
                <NavLink
                  to="/calculator"
                  className={css.burger_linknav}
                  activeClassName={css.burger_activeLink}
                >
                  калькулятор
                </NavLink>
              </div>
                </ul>
            </nav>
      </div>
    )
    }