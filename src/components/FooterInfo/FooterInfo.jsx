import React from "react";
import { useSelector } from "react-redux";
import styles from "./FooterInfo.module.css";
import {
  daySummary,
  notAllowedProducts,
} from "../../redux/userData/userDataSelectors.js";

export default function FooterInfo() {
  const summary = useSelector(daySummary);
  const products = useSelector(notAllowedProducts);

  // const { date, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
  //   summary;
  // console.log(summary);
  // let str = date;
  return (
    <section className={styles.section}>
      <div className={styles.daySection}>
        <span className={styles.title}>Сводка за {summary.date}</span>
        <ul className={styles.kcalList}>
          <li className={styles.kcalItem}>
            <span>Осталось</span>
            <span className={styles.kcalListSpan}>
              {String(summary.kcalLeft).padStart(3, "0")}
            </span>
            <span> ккал</span>
          </li>
          <li className={styles.kcalItem}>
            <span>Употреблено</span>
            <span className={styles.kcalListSpan}>
              {String(summary.kcalConsumed).padStart(3, "0")}
            </span>
            <span> ккал</span>
          </li>
          <li className={styles.kcalItem}>
            <span>Дневная норма</span>
            <span className={styles.kcalListSpan}>
              {String(summary.dailyRate).padStart(3, "0")}
            </span>
            <span> ккал</span>
          </li>
          <li className={styles.kcalItem}>
            <span>n% от нормы</span>
            <span className={styles.kcalListSpan}>
              {Math.round(summary.percentsOfDailyRate)}%
            </span>
            <span> ккал</span>
          </li>
        </ul>
      </div>
      <div className={styles.product}>
        <span className={styles.title}>Нерекомендуемые продукты</span>
        <p className={styles.productList}>
          {" "}
          {products.length
            ? products.join(", ")
            : "Здесь будет отображаться Ваш рацион"}
        </p>
      </div>
    </section>
  );
}
