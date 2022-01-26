import styles from "./MenuOverlate.module.css";
import { NavLink } from "react-router-dom";
export default function MenuOverlate() {
    return(<section className={styles.section}>
        <ul className={styles.dairy}>
            <li>
            <NavLink
                to="/diary"
                 className={styles.linknav}
                 activeClassName={styles.activeLink}
              >
                ДНЕВНИК
              </NavLink>
            </li>
              <li>
              <NavLink
                to="/calculator"
                 className={styles.linknav}
                 activeClassName={styles.activeLink}
              >
                КАЛЬКУЛЯТОР
              </NavLink>
              </li>
            </ul>
    </section>)
}