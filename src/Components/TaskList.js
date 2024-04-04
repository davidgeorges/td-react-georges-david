import React from 'react';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul data-cy="task-list">
      {tasks.map(task => (
        <li
          key={task.id}
          onClick={() => toggleTask(task.id)}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          data-cy="task-item"
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
