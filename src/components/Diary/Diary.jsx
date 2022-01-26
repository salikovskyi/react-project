import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dayInfo } from "../../redux/userData/userDataOperations";
import ProductItem from "../ProductItem/ProductItem";
import CalendarPicker from "../CalendarPicker";
import ProductForm from "../ProductForm/ProductForm";
import { getEatenProducts } from "../../redux/userData/userDataSelectors";
import { fetchUserInfo } from "../../redux/auth/authOperations";

export default function Diary() {
  const products = useSelector(getEatenProducts);

  return (
    <>
      <p>MAMY E6AJI</p>
      <CalendarPicker />
      <ProductForm />
      <ul>
        {products?.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    </>
  );
}
