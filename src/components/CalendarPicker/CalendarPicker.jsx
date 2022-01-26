import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import { dayInfo } from "../../redux/userData/userDataOperations";
import { getToken } from "../../redux/auth/authSelectors";

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const date = new Date();
  let dateString = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

  const [startDate, setStartDate] = useState(dateString);

  useEffect(() => {
    SlimmomAPI.setToken(token);
    dispatch(dayInfo({ date: startDate }));
  }, [dispatch, startDate]);

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={new Date()}
      onChange={(date) => setStartDate(date)}
    />
  );
}
