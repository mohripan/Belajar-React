import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Auth = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            {isAuthenticated ? (
                <TaskList />
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
                    <LoginForm />
                    <SignupForm />
                </>
            )}
        </div>
    );
};

export default Auth;