import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import { dayInfo } from "../../redux/userData/userDataOperations";
import { getToken } from "../../redux/auth/authSelectors";
import { pickDate, setCurrentDate } from "../../redux/userData/userDataSlice";
import { convertDate } from "../../utils/helpers/convertDate";
import css from "./CalendarPicker.module.css";
import { getCurrentDate } from "../../redux/userData/userDataSelectors";

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    SlimmomAPI.setToken(token);

    dispatch(dayInfo({ date: convertDate(startDate) }));
    dispatch(pickDate(convertDate(startDate)));
  }, [dispatch, startDate]);

  return (
    <div className={css.div}>
      <div className={css.calendar_container}>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          className={`datte ${css.date}`}
        />
      </div>
    </div>
  );
}
