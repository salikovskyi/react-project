import React from "react";
import { useSelector } from "react-redux";
import styles from "./FooterInfo.module.css";
import {
  daySummary,
  notAllowedProducts,
} from "../../redux/userData/userDataSelectors.js";
import ContainerStyled from '../../components/_styled/Container.styled'

export default function FooterInfo() {
  const summary = useSelector(daySummary);
  const products = useSelector(notAllowedProducts);

  const { date, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
    summary;
  let str = date;
  console.log(str.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`));
  return (
    <section className={styles.mainSection}>
      <ContainerStyled width={535}>
      <div className={styles.section}>
        <div className={styles.daySection}>
          <span className={styles.title}>Сводка за {date ? date : ""}</span>
          <ul className={styles.kcalList}>
            <li className={styles.kcalItem}>
              <span>Осталось</span>
              <span>{String(kcalLeft).padStart(3, "0")}</span>
              <span> ккал</span>
            </li>
            <li className={styles.kcalItem}>
              <span>Употреблено</span>
              <span>{String(kcalConsumed).padStart(3, "0")}</span>
              <span> ккал</span>
            </li>
            <li className={styles.kcalItem}>
              <span>Дневная норма</span>
              <span>{String(dailyRate).padStart(3, "0")}</span>
              <span> ккал</span>
            </li>
            <li className={styles.kcalItem}>
              <span>n% от нормы</span>
              <span>{Math.round(percentsOfDailyRate)}%</span>
              <span> ккал</span>
            </li>
          </ul>
        </div>
        <div className={styles.product}>
          <span className={styles.title}>Нерекомендуемые продукты</span>
          <p className={styles.productList}> {products.join(", ")}ggggggggg</p>
        </div>
      </div>
      </ContainerStyled>
    </section>
  );
}
