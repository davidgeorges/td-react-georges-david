import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li
          key={task.id}
          onClick={() => toggleTask(task.id)}
          className={`task-list-item ${task.completed ? 'completed' : ''}`}
          data-cy="task-item"
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;