// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Trigger once
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(storedTasks)
    if (storedTasks && storedTasks.length) {
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

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };  

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.completed;
    if (filter === 'undone') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
      <div className="button-container">
        <button data-cy="filter-btn-all" onClick={() => setFilter('all')}>Toutes</button>
        <button data-cy="filter-btn-done" onClick={() => setFilter('done')}>Complétées</button>
        <button data-cy="filter-btn-undone" onClick={() => setFilter('undone')}>Non complétées</button>
      </div>
    </div>
  );
};

export default App;