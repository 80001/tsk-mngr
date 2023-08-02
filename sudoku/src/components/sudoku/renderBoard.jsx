import React, { useEffect, useState } from 'react';
import { checkBoard } from './numbersArrays';
import SudokuCell from './renderCells';
import { useSudokuContext } from '../context';

const SudokuBoard = ({ board, isReset }) => {
    const [newBoard, setNewBoard] = useState([])
    const [initBoart, setInitBoard] = useState([])
    const [activeCell, setActiveCell] = useState(null); // Стан активного input

    const { setShowError, setShowNumber, showNumber,
        setIsGameOver, inputValue, setInputValue,
        setInputRow, setInputCol, inputRow, inputCol, showInput } = useSudokuContext();

    useEffect(() => {
        checkBoard.checkNum()
        if (checkBoard.finish) {
            setIsGameOver(true)
        }
    }, [showNumber, activeCell])
    useEffect(() => {
        if (inputValue !== undefined && inputCol !== undefined && inputRow !== undefined) {
            console.log(inputValue, inputRow, inputCol)
            handleCellChange(inputRow, inputCol, inputValue)
            setInputValue(undefined)
            console.log(inputValue, inputRow, inputCol)
        }
    }, [inputValue])


    useEffect(() => {
        setNewBoard(initBoart);
        setShowError(false)
        setShowNumber(false)
    }, [isReset])

    useEffect(() => {
        checkBoard.init(board);
        setNewBoard(checkBoard.startArray);
        setInitBoard(board)
        setShowError(false)
        setShowNumber(false)
        checkBoard.checkNum()
    }, [board]);

    const handleCellClick = (row, col) => {
        setActiveCell({ row, col }); // Встановлюємо активний input
    };
    const handleCellChange = (row, col, newValue) => {
        setShowNumber(newValue)
        // Update the value in the board array
        const updatedBoard = newBoard.map((r, rowIndex) =>
            rowIndex === row ? r.map((cell, colIndex) => (colIndex === col ? newValue : cell)) : r
        );
        checkBoard.init(updatedBoard);
        checkBoard.update(row, col, newValue)
        setNewBoard(checkBoard.startArray);
        if (checkBoard.error) {
            setShowError(true)
        } else {
            setShowError(false)
        }
    };


    return (
        <div className="sudoku-board">
            {newBoard.map((row, rowIndex) => (
                <div className={`sudoku-board__row sudoku-board__row${rowIndex + 1}`} key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <SudokuCell
                            key={colIndex}
                            value={cell}
                            row={rowIndex}
                            col={colIndex}
                            onClick={() => handleCellClick(rowIndex, colIndex)} // Передаємо обробник кліку в дочірній компонент
                            isInitialValue={board[rowIndex][colIndex] !== undefined}
                            isActive={activeCell && activeCell.row === rowIndex && activeCell.col === colIndex} // Передаємо стан активності в дочірній компонент
                            onChange={(newValue) => handleCellChange(rowIndex, colIndex, newValue)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SudokuBoard;
