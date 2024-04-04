import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  //Trigger at every new char in the input
  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  //Trigger when pressing enter or click on add task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form data-cy="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Enter task"
        data-cy="task-input"
      />
      <button type="submit" data-cy="add-task-btn">Add Task</button>
    </form>
  );
};

export default TaskForm;
