import css from "./UserMenu.module.css";
import Container from "../../_styled/Container.styled";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export default function UserMenu({ logout }) {
  const dispatch = useDispatch();

  return (
    <div className={css.header_login_user_wrapper}>
      <span className={css.header_login_user_nickname}>Nic</span>
      <hr className={css.header_login_user_underline} />
      <button
        onClick={() => dispatch(logoutUser())}
        className={css.login_linknav}
        activeClassName={css.activeLink}
      >
        Выйти
      </button>
    </div>
  );
}
