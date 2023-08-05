import React, { useEffect, useState } from 'react'
import { useSudokuContext } from '../context';
import { determineDifficulty } from '../utils';

const Timer = ({ startGame }) => {
    const { isGameOver, setIsGameOver, difficulty, setRecords, records } = useSudokuContext();
    const [timer, setTimer] = useState(0);
    const [showEnd, setShowEnd] = useState(false);

    useEffect(() => {
        if (isGameOver) {
            setShowEnd(true)
        }
    }, [isGameOver])

    const formatTime = () => {
        const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };
    useEffect(() => {
        let interval;
        // Запускаємо таймер, коли компонент монтується
        if (!isGameOver) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        // Зупиняємо таймер, коли компонент розмонтується або гра закінчується
        return () => clearInterval(interval);

    }, []);

    // Додати інші функції для обробки дій гравця, такі як валідація та збереження гри.

    useEffect(() => {
        console.group('timer')
        console.log(isGameOver, 'isGame')
        console.log('start')
        if (isGameOver) {
            console.log('start true')
            if (timer === 0) {
                console.log('timer = 0')
            } else {
                console.log('else')
                const dif = determineDifficulty(difficulty)
                const currentRecord = records[dif] || [];
                setRecords({
                    ...records,
                    [dif]: [...currentRecord, timer],
                });
                alert(`Гра завершена! Ваш час: ${formatTime()}`);
                console.log('is end')
            }
            setIsGameOver(false);
            startGame()
            console.log(isGameOver, 'endGame')
        }
        console.log('end')
        console.groupEnd()
    }, [showEnd]);


    return (
        <h2 className='timer'>Timer: {formatTime()} seconds</h2>
    )
}

export default Timer