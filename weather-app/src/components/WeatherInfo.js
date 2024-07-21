import React from "react";

const WeatherInfo = ({weather}) => {
    return (
        <div className="mt-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherInfo;