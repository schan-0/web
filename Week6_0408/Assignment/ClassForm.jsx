import React, { useState } from 'react';

function ClassForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, time, location });
    setName('');
    setTime('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        강의 이름:
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="강의 이름" />
      </label>
      <label>
        시간:
        <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="시간" />
      </label>
      <label>
        장소:
        <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="장소" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
}
export default ClassForm;