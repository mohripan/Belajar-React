import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleComplete = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            toggleComplete={() => toggleComplete(index)}
            removeTask={() => removeTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;