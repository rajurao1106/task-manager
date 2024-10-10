// src/components/TaskItem.jsx

import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
