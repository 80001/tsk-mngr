import React, { useEffect, useState } from 'react'
import SudokuBoard from './renderBoard';
import './styles.scss'
import { initialBoard } from './numbersArrays';



const Sudoku = () => {
    const [board, setBoard] = useState(initialBoard);
    const [timer, setTimer] = useState(0);
    const [timerStart, setTimerStart] = useState(false);
    const [difficulty, setDifficulty] = useState('lvl2');

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

    const handleDifficultyChange = (event) => {
        // Обробник для зміни рівня складності
        const selectedDifficulty = event.target.value;
        setDifficulty(selectedDifficulty);
        console.log(difficulty)
    };

    const startGame = () => {
        setTimerStart(false)
    }
    const resetGame = () => {
        setTimerStart(false)
    }


    return (
        <div className="sudoku-game">
            <h1>Sudoku Game</h1>
            <h2 className='timer'>Timer: {formatTime(timer)} seconds</h2>
            <SudokuBoard board={board} />
            {/* Додати інші компоненти або інтерфейси для взаємодії з гравцем. */}
            <form className='sudoku-game__ctrl'>
                <div className="sudoku-game__lvl">
                    <div>
                        <input type="radio" id="lvl1" name="difficulty" value="lvl1" checked={difficulty === "lvl1"} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl1">Easy</label>
                    </div>

                    <div>
                        <input type="radio" id="lvl2" name="difficulty" value="lvl2" checked={difficulty === "lvl2"} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl2">Medium</label>
                    </div>

                    <div>
                        <input type="radio" id="lvl3" name="difficulty" value="lvl3" checked={difficulty === "lvl3"} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl3">Hard</label>
                    </div>
                </div>
                <div className="sudoku-game__btns">
                    <button onClick={() => startGame} type='button'>Start New Game</button>
                    <button onClick={() => resetGame} type='button'>Reset Game</button>
                </div>
            </form>

        </div>
    );
};

export default Sudoku;