import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskComplete } from "../redux/actions/taskActions";

const TaskItem = ({task, onEdit}) => {
    const dispatch = useDispatch();

    return (
        <li className="p-2 border-b flex justify-between items-center">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div>
                <button
                    onClick={() => dispatch(toggleTaskComplete(task.id))}
                    className={`px-2 py-1 text-white rounded ${task.completed ? 'bg-green-500' : 'bg-gray-500'} mr-2`}
                >
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                    onClick={() => onEdit(task)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;