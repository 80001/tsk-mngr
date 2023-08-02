import React, { useEffect, useState } from 'react';
import SudokuBoard from './renderBoard';
import './styles.scss';
import Timer from './timer';
import { generateRandomSudoku } from './createRundom';
import { useSudokuContext } from '../context';
import { checkBoard } from './numbersArrays';
import { formatTime } from '../utils';

const Sudoku = () => {
    const { difficulty, setDifficulty, records, isGameOver, setIsGameOver, setInputValue } = useSudokuContext();
    const [board, setBoard] = useState(generateRandomSudoku(difficulty))
    const [isReset, setIsReset] = useState(false)
    const [timerStart, setTimerStart] = useState(0);

    const handleDifficultyChange = (event) => {
        const selectedDifficulty = parseInt(event.target.value, 10);
        setDifficulty(selectedDifficulty);
    };

    const startGame = () => {
        const newBoard = generateRandomSudoku(difficulty);
        setBoard(newBoard)
        setTimerStart((prev) => prev + 1);
    };

    useEffect(() => {
        console.log('shit')
        if (isGameOver) {
            console.log('ydaw')
            startGame();
        }
    }, [isGameOver]);

    const resetGame = () => {
        setIsReset(!isReset)
    };
    const inputNumber = (value) => {
        setInputValue(value)
        console.log(value)
    }

    return (
        <div className="sudoku-game">
            <h1>Sudoku Game</h1>
            <Timer key={timerStart} />
            <div className="sudoku-game__main">
                <div className="sudoku-game__input">
                    <h2>Numbers</h2>
                    <div className="numbers">
                        <button disabled={checkBoard.numbers[1]} onClick={() => inputNumber(1)}>1</button>
                        <button disabled={checkBoard.numbers[2]} onClick={() => inputNumber(2)}>2</button>
                        <button disabled={checkBoard.numbers[3]} onClick={() => inputNumber(3)}>3</button>
                        <button disabled={checkBoard.numbers[4]} onClick={() => inputNumber(4)}>4</button>
                        <button disabled={checkBoard.numbers[5]} onClick={() => inputNumber(5)}>5</button>
                        <button disabled={checkBoard.numbers[6]} onClick={() => inputNumber(6)}>6</button>
                        <button disabled={checkBoard.numbers[7]} onClick={() => inputNumber(7)}>7</button>
                        <button disabled={checkBoard.numbers[8]} onClick={() => inputNumber(8)}>8</button>
                        <button disabled={checkBoard.numbers[9]} onClick={() => inputNumber(9)}>9</button>
                    </div>
                </div>
                <SudokuBoard board={board} isReset={isReset} />
                <div className="sudoku-game__hiscore">
                    <h2>Hiscore:</h2>
                    {Object.entries(records).map(([key, values]) => {
                        // Sort the values array in ascending order
                        values.sort((a, b) => a - b);
                        const limitedValues = values.slice(0, 5);
                        return (
                            <div key={key}>
                                <h3>{key}:</h3>
                                <ul>
                                    {limitedValues.map((value, index) => (
                                        <li key={index}>{formatTime(value)}</li>
                                    )
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>


            </div>
            <form className='sudoku-game__ctrl'>
                <div className="sudoku-game__lvl">
                    <div>
                        <input type="radio" id="lvl1" name="difficulty" value={5} checked={difficulty === 5} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl1">Easy</label>
                    </div>

                    <div>
                        <input type="radio" id="lvl2" name="difficulty" value={60} checked={difficulty === 60} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl2">Medium</label>
                    </div>

                    <div>
                        <input type="radio" id="lvl3" name="difficulty" value={65} checked={difficulty === 65} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl3">Hard</label>
                    </div>
                    <div>
                        <input type="radio" id="lvl4" name="difficulty" value={70} checked={difficulty === 70} onChange={handleDifficultyChange} />
                        <label htmlFor="lvl4">Expert</label>
                    </div>
                </div>
                <button onClick={startGame} type='button'>Start New Game</button>
                <div className="sudoku-game__btns">
                    <button onClick={resetGame} type='button'>Reset Game</button>
                </div>
            </form>
        </div>
    );
};

export default Sudoku;
