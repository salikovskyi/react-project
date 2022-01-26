import { DatePicker, CalendarContainer } from "react-datepicker";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import { dayInfo } from "../../redux/userData/userDataOperations";
import { getToken } from "../../redux/auth/authSelectors";
import dateFormatter from "../../utils/helpers/dateFormatter";

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    SlimmomAPI.setToken(token);
    dispatch(dayInfo({ date: startDate }));
  }, [dispatch, startDate]);
  // startDate ? startDate : Date.parse(dateFormatter)

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={}
    />
  );
}
