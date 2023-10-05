import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2>Appointment Calendar</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy" // You can customize the date format
      />
    </div>
  );
};

export default CalendarComponent;