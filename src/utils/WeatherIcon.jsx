import getWeather from './GetWeather';
import React, { useState, useEffect } from 'react';

export default function WeatherIcon() {
    const [WeatherIcon, setWeatherIcon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWeather();
                setWeatherIcon(data.current.condition.icon);
                console.log(data.current.condition.icon);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <img className='icon icon_size-s' src={WeatherIcon} alt="" />
    );
}