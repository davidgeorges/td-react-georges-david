import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form data-cy="task-form" className="task-form" onSubmit={handleSubmit}>
      <input
        data-cy="task-input"
        type="text"
        value={taskText}
        onChange={handleChange}
        className="task-input"
        placeholder="Enter task"
      />
      <button data-cy="add-task-btn" className="button" type="submit" >Add Task</button>
    </form>
  );
};

export default TaskForm;