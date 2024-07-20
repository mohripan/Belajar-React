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

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            ></input>
            <button onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span
                            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                            onClick={() => toggleTodo(index)}
                        >{todo.task}</span>
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;