import React from 'react';

const TodoItem = ({ task, toggleComplete, removeTask, removeCompletedTask }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      <div>
        <button
          className={`px-2 py-1 text-white rounded ${task.completed ? 'bg-green-500' : 'bg-gray-500'}`}
          onClick={toggleComplete}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
          onClick={removeTask}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;