import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import { dayInfo } from "../../redux/userData/userDataOperations";
import { getToken } from "../../redux/auth/authSelectors";
import dateFormatter from "../../utils/helpers/dateFormatter";
import { setCurrentDate } from "../../redux/userData/userDataSlice";
import css from "./CalendarPicker.module.css";
import convertDate from "../../utils/helpers/convertDate";

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const [startDate, setStartDate] = useState("");
  const [convertedDate, setConvertedDate] = useState(dateFormatter);

  useEffect(() => {
    SlimmomAPI.setToken(token);
    dispatch(dayInfo({ date: startDate ? startDate : dateFormatter }));
  }, [dispatch, startDate]);

  // useEffect(() => {
  //   setConvertedDate(convertDate(startDate));
  // }, [startDate]);

  useEffect(() => {
    const toString = Object.prototype.toString;
    toString === "string" && dispatch(setCurrentDate(startDate));
  }, [startDate]);

  return (
    <div className={css.div}>
      <div className={css.calendar_container}>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate ? startDate : Date.parse(dateFormatter)}
        onChange={(date) => setStartDate(date)}
        className={css.date}
      />
    </div>
  </div>
  );
}
