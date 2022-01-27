import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import { dayInfo } from "../../redux/userData/userDataOperations";
import { getToken } from "../../redux/auth/authSelectors";
import dateFormatter from "../../utils/helpers/dateFormatter";
import { setCurrentDate } from "../../redux/userData/userDataSlice";
import { convertDate } from "../../utils/helpers/convertDate";

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    SlimmomAPI.setToken(token);
    console.log(`startDate`, startDate);
    dispatch(dayInfo({ date: convertDate(startDate) }));
  }, [dispatch, startDate]);

  useEffect(() => {
    const toString = Object.prototype.toString;
    toString === "string" && dispatch(setCurrentDate(startDate));
  }, [startDate]);

  return (
    <div>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
