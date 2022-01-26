import css from "./Header.module.css";
import logoPhone from "../../assets/header-logo/header/logoPhone.png";
import logoTablet from "../../assets/header-logo/header/logoTablet.png";
import logoDesc from "../../assets/header-logo/header/logoDesc.png";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { isModalOpen } from "../../redux/userData/userDataSelectors";
import { closeModal } from "../../redux/userData/userDataSlice";
import Container from "../_styled/Container.styled";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";
import { useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  
  const modalOpen = useSelector(isModalOpen);
  return (
    <header>
      <div className={css.header_section}>
        <Container>
          {!isLoggedIn && (
            <div className={css.header_wrapper}>
              <picture className={css.header_logo}>
                <source srcSet={logoDesc} media="(min-width: 1280px)" />
                <source srcSet={logoTablet} media="(min-width: 768px)" />
                <img src={logoPhone} alt="logo" />
              </picture>
              <hr className={css.header_underline} />
              <div className={css.header_links}>
                <NavLink
                  to="/login"
                  className={css.linknav}
                  activeClassName={css.activeLink}
                >
                  вход
                </NavLink>
                <NavLink
                  to="/registration"
                  className={css.linknav}
                  activeClassName={css.activeLink}
                >
                  регистрация
                </NavLink>
              </div>
            </div>
          )}

          {isLoggedIn && (
            <div className={css.header_login_wrapper}>
              <picture className={css.header_login_logo}>
                <source srcSet={logoDesc} media="(min-width: 1280px)" />
                <source srcSet={logoTablet} media="(min-width: 768px)" />
                <img src={logoTablet} alt="logo" />
              </picture>
              <hr className={css.header_login_logo_line} />
              <div className={css.header_login_navlinks}>
                <NavLink
                  exact
                  to="/diary"
                  className={css.linknav}
                  exact
                  activeClassName={css.activeLink}
                >
                  дневник
                </NavLink>
                <NavLink
                  exact
                  to="/calculator"
                  className={css.linknav}
                  exact
                  activeClassName={css.activeLink}
                >
                  калькулятор
                </NavLink>
              </div>

              <div className={css.header_user_tablet}>
                <UserMenu className={css.usermenu} />
              </div>

              <BurgerMenu />
            </div>
          )}
        </Container>
      </div>
      {isLoggedIn && (
        <div className={css.header_login_user_menu}>
          <Container>
            <UserMenu className={css.usermenu} />
          </Container>
        </div>
      )}
      {modalOpen && (
        <div className={css.header_login_user_menu} onClick={ () => dispatch(closeModal())}>
          <Container>
            <div className={css.header_login_user_wrapper}>
              <button className={css.header_button_modal_exit}>
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
