import React from 'react';

function ClassItem({ classInfo, onDelete }) {
  return (
    <div>
      <h3>{classInfo.name}</h3>
      <p>{classInfo.time} ({classInfo.location})</p>
      <button onClick={() => onDelete(classInfo.id)}>삭제</button>
    </div>
  );
}

export default ClassItem;