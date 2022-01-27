import css from './ProductModal.module.css'
import { NavLink } from 'react-router-dom'

export default function ProductModal({active}) {
    return (

        <div className={`${active ? css.product_modal_active : css.product_modal_closed} ${css.product_modal}`}>
            <nav>
                <ul>
                <div className={css.product_login_navlinks}>
                <NavLink
                  to="/diary"
                  className={css.product_linknav}
                  activeClassName={css.product_activeLink}
                >
                  дневник
                </NavLink>
                <NavLink
                  to="/calculator"
                  className={css.product_linknav}
                  activeClassName={css.product_activeLink}
                >
                  калькулятор
                </NavLink>
              </div>
                </ul>
            </nav>
      </div>
    )
    }