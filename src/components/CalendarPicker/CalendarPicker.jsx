import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { dayInfo } from "../../redux/userData/userDataOperations";

export default function CalendarPicker() {
  const dispatch = useDispatch();

  const date = new Date();
  let dateString = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getDate(),
  ].join("-");

  const [startDate, setStartDate] = useState(dateString);

  useEffect(() => {
    dispatch(dayInfo(startDate));
  }, [dispatch, startDate]);

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={new Date()}
      onChange={(date) => setStartDate(date)}
    />
  );
}
