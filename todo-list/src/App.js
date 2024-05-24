import React, { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <NewTaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;