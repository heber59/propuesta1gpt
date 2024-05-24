import React from 'react';

function Task({ task }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.name}</span>
    </div>
  );
}

export default Task;