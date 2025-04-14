import React, { useState } from 'react';

function DaySelector({ days, onDayChange }) {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const handleChange = (e) => {
    setSelectedDay(e.target.value);
    onDayChange(e.target.value);
  };

  return (
    <select value={selectedDay} onChange={handleChange}>
      {days.map(day => (
        <option key={day} value={day}>{day}</option>
      ))}
    </select>
  );
}

export default DaySelector;