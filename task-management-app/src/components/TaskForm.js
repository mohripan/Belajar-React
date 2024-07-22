import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/actions/taskActions";

const TaskForm = ({ editingTask, onCancelEdit }) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (editingTask) {
            setText(editingTask.text);
        } else {
            setText('');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            if (editingTask) {
                dispatch(editTask({...editingTask, text}));
                onCancelEdit();
            } else {
                dispatch(addTask({ id: Date.now(), text, completed: false}));
            }
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
                    Task
                </label>
                <input
                    type="text"
                    id="task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    required
                />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {editingTask ? 'Update Task' : 'Add Task'}
                </button>
                {editingTask && (
                    <button
                        type="button"
                        onClick={onCancelEdit}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default TaskForm;