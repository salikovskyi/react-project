import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import { dayInfo } from "../../redux/userData/userDataOperations";
import { getToken } from "../../redux/auth/authSelectors";
import dateFormatter from "../../utils/helpers/dateFormatter";
import { setCurrentDate } from "../../redux/userData/userDataSlice";

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    SlimmomAPI.setToken(token);
    dispatch(dayInfo({ date: startDate }));
  }, [dispatch, startDate]);

  useEffect(() => {
    startDate && dispatch(setCurrentDate(startDate));
  }, [startDate]);

  return (
    <div>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate ? startDate : Date.parse(dateFormatter)}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
