import React from 'react';
import Task from './Task'; // Asegúrate de que la ruta es correcta

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
