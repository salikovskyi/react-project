import React from "react";
import { useSelector } from "react-redux";
import styles from "./FooterInfo.module.css";
import {
  daySummary,
  getUserData,
  ownNotAllowedProducts,
} from "../../redux/userData/userDataSelectors.js";
import dateFormatter from "../../utils/helpers/dateFormatter";
import { userDaily } from "../../redux/userData/userDataOperations";

export default function FooterInfo() {
  const summary = useSelector(daySummary);
  const products = useSelector(ownNotAllowedProducts);

  const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = summary;

  let str = summary.date && summary.date;

  return (
    <section className={styles.section}>
      <div className={styles.daySection}>
        <span className={styles.title}>
          Сводка за{" "}
          {summary.date
            ? str.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
            : dateFormatter}
        </span>
        <ul className={styles.kcalList}>
          <li className={styles.kcalItem}>
            <span>Осталось</span>
            <span className={styles.kcalListSpan}>
              {String(kcalLeft).padStart(3, "0")}
            </span>
            <span> ккал</span>
          </li>
          <li className={styles.kcalItem}>
            <span>Употреблено</span>
            <span className={styles.kcalListSpan}>
              {String(kcalConsumed).padStart(3, "0")}
            </span>
            <span> ккал</span>
          </li>
          <li className={styles.kcalItem}>
            <span>Дневная норма</span>
            <span className={styles.kcalListSpan}>
              {String(dailyRate).padStart(3, "0")}
            </span>
            <span> ккал</span>
          </li>
          <li className={styles.kcalItem}>
            <span>n% от нормы</span>
            <span className={styles.kcalListSpan}>
              {Math.round(percentsOfDailyRate)}%
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
