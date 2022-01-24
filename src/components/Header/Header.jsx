import css from "./Header.module.css";
import logoPhone from "../../assets/header-logo/header/logoPhone.png";
import logoTablet from '../../assets/header-logo/header/logoTablet.png';
import logoDesc from '../../assets/header-logo/header/logoDesc.png';
import Hamburger from 'hamburger-react'

import Container from "../_styled/Container.styled";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className={css.header_section}>
      <Container>
        <div className={css.header_wrapper}>
        {/* <picture class={css.header_logo}>
                <source srcSet={logoDesc} media="(min-width: 1280px)"/>
                <source srcSet={logoTablet} media="(min-width: 768px)"/>
                <img src={logoPhone} alt="logo" /> 
            </picture> */}
        <picture class={css.header_logo}>
                <source srcSet={logoDesc} media="(min-width: 1280px)"/>
                <source srcSet={logoTablet} media="(min-width: 768px)"/>
                <img src={logoTablet} alt="logo" /> 
            </picture>
                <hr className={css.header_underline}/>

            {/* <div className={css.header_links}>
          <NavLink
            exact
            to="/login"
            className={css.linknav}
            exact
            activeClassName={css.activeLink}
          >
            вход
          </NavLink>
          <NavLink
            exact
            to="/registration"
            className={css.linknav}
            exact
            activeClassName={css.activeLink}
          >
            регистрация
          </NavLink>
          </div> */}
          <Hamburger
          direction="right" 
          size={25}
          rounded />
        </div>
      </Container>
    </div>
  );
}
