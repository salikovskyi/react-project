import React from "react";
import { useSelector } from "react-redux";
import styles from "./FooterInfo.module.css";
import ContainerStyled from "../_styled/Container.styled";
// import {
//   products,
//   dayKcal,
//   percents,
//   kcalConsumed,
//   kcalLeft,
//   data,
// } from "../../redux/info";

export default function FooterInfo() {
  //   const dayKcal = useSelector(dayKcal);
  //   const products = useSelector(products);
  //   const kcalLeft = useSelector(kcalLeft);
  //   const kcalConsumed = useSelector(kcalConsumed);
  //   const percents = useSelector(percents);
  //   const date = useSelector(dateSelector);
  //   const newDate = new Date().toLocaleDateString();

  return (
    <section className={styles.mainSection}>
      <ContainerStyled width={535}>
      <div className={styles.section}>
        <div className={styles.daySection}>
          {/* <span className={styles.title}>Сводка за {date ? newDate : ""}</span> */}
          <span className={styles.title}>Сводка за </span>
          <ul className={styles.kcalList}>
            <li className={styles.kcalItem}>
              <span>Осталось</span>
              {/* <span>{kcalLeft} ккал</span> */}
              <span> ккал</span>
            </li>
            <li className={styles.kcalItem}>
              <span>Употреблено</span>
              {/* <span>{kcalConsumed} ккал</span> */}
              <span> ккал</span>
            </li>
            <li className={styles.kcalItem}>
              <span>Дневная норма</span>
              {/* <span>{dayKcal} ккал</span> */}
              <span> ккал</span>
            </li>
            <li className={styles.kcalItem}>
              <span>n% от нормы</span>
              <span> ккал</span>
              {/* <span>{Math.round(percents)}%</span> */}
            </li>
          </ul>
        </div>
        <div className={styles.product}>
          <span className={styles.title}>Нерекомендуемые продукты</span>
          {/* <p className={styles.productList}> {products}</p> */}
          <p className={styles.productList}> products</p>
        </div>
      </div>
      </ContainerStyled>
    </section>
  );
}
