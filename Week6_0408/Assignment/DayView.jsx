import React from 'react';
import ClassItem from './ClassItem';

function DayView({ day, schedule, onDeleteClass }) {
  return (
    <div>
      <h2>{day}</h2>
      {schedule.map(lecture => (
        <ClassItem key={lecture.id} classInfo={lecture} onDelete={onDeleteClass} />
      ))}
    </div>
  );
}

export default DayView;