import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { logout } from "../redux/actions/authActions";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [editingTask, setEditingTask] = useState(null);

    const handleEdit = (task) => {
        setEditingTask(task);
    };

    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Tasks</h2>
                <button
                    onClick={() => dispatch(logout())}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>
            <TaskForm editingTask={editingTask} onCancelEdit={handleCancelEdit} />
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onEdit={handleEdit} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;