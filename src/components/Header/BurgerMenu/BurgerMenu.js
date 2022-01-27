import { useState } from "react";
import Hamburger from "hamburger-react";
import { useEffect } from "react";
import css from "./BurgerMenu.module.css";
import BurgerModal from "../BurgerModal/BurgerModal";

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
    }
  });

  return (
    <div>
      <nav className={css.burger_icon}>
        <span onClick={() => setShowMenu(!showMenu)}>
          <Hamburger size={25} />
        </span>
      </nav>
      <BurgerModal active={showMenu} setActive={setShowMenu} />
    </div>
  );
};

export default BurgerMenu;
