import css from "./Header.module.css";
import logoPhone from "../../assets/header-logo/header/logoPhone.png";
import logoTablet from "../../assets/header-logo/header/logoTablet.png";
import logoDesc from "../../assets/header-logo/header/logoDesc.png";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { isModalOpen } from "../../redux/userData/userDataSelectors";
import { closeModal } from "../../redux/userData/userDataSlice";
import { logoutUser } from "../../redux/auth/authOperations";
import Container from "../_styled/Container.styled";
import { NavLink, Link } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";
import { useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <div className={css.header_section}>
        <Container>
          {!isLoggedIn && (
            <div className={css.header_wrapper}>
              <Link to="/">
                <picture className={css.header_logo}>
                  <source srcSet={logoDesc} media="(min-width: 1280px)" />
                  <source srcSet={logoTablet} media="(min-width: 768px)" />
                  <img src={logoPhone} alt="logo" />
                </picture>
              </Link>
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
                  to="/diary"
                  className={css.linknav}
                  activeClassName={css.activeLink}
                >
                  дневник
                </NavLink>
                <NavLink
                  to="/calculator"
                  className={css.linknav}
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
            <UserMenu
              logout={() => dispatch(logoutUser())}
              className={css.usermenu}
            />
          </Container>
        </div>
      )}
    </header>
  );
}
