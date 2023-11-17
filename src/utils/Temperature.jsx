import getWeather from './GetWeather';
import React, { useState, useEffect } from 'react';

export default function Temperature() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWeather();
                setWeatherData(data);
                console.log(data.current.temp_c);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <span className="temperature">{weatherData && weatherData.current.temp_c}°</span>
    );
}