import css from "./UserMenu.module.css";
import Container from "../../_styled/Container.styled";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../../redux/auth/authOperations";
import { useDispatch, useSelector} from "react-redux";
import {getUserName} from '../../../redux/auth/authSelectors'
export default function UserMenu({ logout }) {
  const dispatch = useDispatch();
  const username = useSelector(getUserName)

  return (
    <div className={css.header_login_user_wrapper}>
      <span className={css.header_login_user_nickname}>{username}</span>
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
