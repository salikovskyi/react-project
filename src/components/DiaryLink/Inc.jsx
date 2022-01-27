import css from "./Inc.module.css";
import React from "react";
export default function Inc () {
  return (
    <ul className={css.form}>
      <li className={css.productName}>
          <p> Баклажан </p>
          <p> 100 г </p>
          <p> 320 ккал </p>
      </li>
      <li className={css.productName}>
          <p> Мясо птицы </p>
          <p> 100 г </p>
          <p> 480 ккал </p>
      </li>
      <li className={css.productName}>
          <p> Хлеб </p>
          <p> 100 г </p>
          <p> 210 ккал </p>
      </li>
      <li className={css.productName}>
          <p> Орех </p>
          <p> 100 г </p>
          <p> 205 ккал </p>
      </li>
      <li className={css.productName}>
          <p> Мясо свинное </p>
          <p> 100 г </p>
          <p> 580 ккал </p>
      </li>

    </ul>
  );
}
