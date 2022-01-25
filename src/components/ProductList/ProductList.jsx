import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dayInfo } from "../../redux/userData/userDataOperations";

export const CalendarProducts = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(dayInfo(startDate));
  }, [startDate]);

  return <ul></ul>;
};
