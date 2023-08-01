import React, { useEffect, useState } from 'react'

const Timer = ({ timerStart }) => {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        // Запускаємо таймер, коли компонент монтується
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        // Зупиняємо таймер, коли компонент розмонтується
        return () => clearInterval(interval);
    }, [timerStart]);
    // Додати інші функції для обробки дій гравця, такі як валідація та збереження гри.

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };
    return (
        <h2 className='timer'>Timer: {formatTime(timer)} seconds</h2>
    )
}

export default Timer