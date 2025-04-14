import React, { useState } from 'react';
import DayView from './DayView';
import ClassForm from './ClassForm';
import DaySelector from './DaySelector';

function App() {
  const initialSchedule = {
    /*
      Format example
      { id: 1, name: 'Computer Network', time: '15:00-16:00', location: '28-318' }
      { id: 2, name: 'Web Programming', time: '09:00-12:00', location: '28-626' }
    */
    월: [],
    화: [{ id: 2, name: 'Web Programming', time: '09:00-12:00', location: '28-626' }],
    수: [],
    목: [],
    금: [],
  };
  const [schedule, setSchedule] = useState(initialSchedule);
  const [selectedDay, setSelectedDay] = useState('월');
  const daysOfWeek = ['월', '화', '수', '목', '금'];

  const handleAddClass = (newClass) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [selectedDay]: [...prevSchedule[selectedDay], { ...newClass, id: Date.now() }],
    }));
  };

  const handleDeleteClass = (id) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [selectedDay]: prevSchedule[selectedDay].filter(cls => cls.id !== id),
    }));
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setEditingClassId(null); // 요일 변경 시 수정 폼 닫기 (선택 사항)
  };

  return (
    <div>
      <h1>Schedule</h1>
      <DaySelector days={daysOfWeek} onDayChange={handleDayChange} />
      <DayView
        day={selectedDay}
        schedule={schedule[selectedDay] || []}
        onDeleteClass={handleDeleteClass} // onDeleteClass prop 전달
      />
      <h2>강의 추가</h2> 
      <ClassForm
        onSubmit={handleAddClass}
      />
    </div>
  );
}

export default App;