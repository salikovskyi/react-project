import css from './UserMenu.module.css'
import Container from '../../_styled/Container.styled';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  return (
    
        <div className={css.header_login_user_wrapper}>
          <span className={css.header_login_user_nickname}>Nic</span>
          <hr className={css.header_login_user_underline} />
          <NavLink
            exact
            to="/exit"
            className={css.login_linknav}
            exact
            activeClassName={css.activeLink}
          >
            Выйти
          </NavLink>
    </div>
  );
}
