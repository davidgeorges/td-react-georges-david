import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import './App.css'
const App = () => {
  const [tasks, setTasks] = useState([]);

  //Trigger once
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(storedTasks)
    if (storedTasks.length) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };
 
  return (
    <div data-cy="app">
      
      <h1>ToDo List</h1>

      <TaskForm addTask={addTask} />

      
    </div>
  );
};

export default App;
