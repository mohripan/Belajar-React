import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Counter</h1>
            <p className="text-2xl">{count}</p>
            <div className="mt-4">
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;