// src/components/AddTaskForm.jsx

import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="border border-gray-300 rounded p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 mt-2 w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
