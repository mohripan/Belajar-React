import React, {useState} from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        setTodos([...todos, {task, completed: false}]);
        setTask('');
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const clearCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>
            <div className="flex mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                className="flex-grow p-2 border border-gray-300 rounded mr-2"
                placeholder="Add a new task"
            ></input>
            <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >Add Task</button>
            </div>
            <ul className="list-none p-0">
                {todos.map((todo, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <span
                            className={`flex-grow cursor-pointer ${
                                todo.completed ? 'line-through text-gray-500' : ''
                            }`}
                            onClick={() => toggleTodo(index)}
                        >{todo.task}</span>
                        <button onClick={() => removeTodo(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded ml-2">Remove</button>
                    </li>
                ))}
            </ul>
            <button
                onClick={clearCompleted}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
            >
                Clear Completed Task
            </button>
        </div>
    );
}

export default TodoList;