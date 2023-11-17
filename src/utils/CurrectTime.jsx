import React, { useState, useEffect } from 'react';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            setCurrentTime(timeString);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span className="time">{currentTime}</span>;
}

export default CurrentTime;