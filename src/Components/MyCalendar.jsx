import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-icons/fa';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => setDate(newDate);

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        value={date}
        className="calendar-inner"
      />
    </div>
  );
};

export default MyCalendar;
