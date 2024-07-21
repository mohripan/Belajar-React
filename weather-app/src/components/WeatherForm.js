import React, { useState } from "react";

const WeatherForm = ({ fetchWeather }) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(lat, lon);
        setLat('');
        setLon('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="number"
                className="w-full px-3 py-2 border rounded"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="Enter latitude"
            />
            <input
                type="number"
                className="w-full px-3 py-2 border rounded"
                value={lon}
                onChange={(e) => setLon(e.target.value)}
                placeholder="Enter longitude"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </form>
    );
};

export default WeatherForm;