import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=62750f84ce3905aeae744307ee92330f`
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Response error');
            }
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Weather App</h1>
            <WeatherForm fetchWeather={fetchWeather} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
}

export default WeatherApp;