import React, { useEffect, useState } from 'react';
import { checkBoard } from './numbersArrays';
import SudokuCell from './renderCells';

const SudokuBoard = ({ board }) => {
    const [newBoard, setNewBoard] = useState(board);
    const [newValue, setNewValue] = useState()
    //edited value in Arr

    useEffect(() => {
        if (newValue !== undefined) {
            console.log('start', checkBoard.startArray)
            console.log('rows', checkBoard.rows)
            console.log('cols', checkBoard.columns)
            console.log('coubs', checkBoard.coubs)
            console.log('new', newBoard)
        }
    }, [newValue])

    useEffect(() => {
        checkBoard.init(board);
        setNewBoard(checkBoard.startArray);
    }, []);

    const handleCellChange = (row, col, newValue) => {
        // Update the value in the board array
        const updatedBoard = checkBoard.startArray.map((r, rowIndex) =>
            rowIndex === row ? r.map((cell, colIndex) => (colIndex === col ? newValue : cell)) : r
        );
        setNewBoard(updatedBoard);
    };

    return (
        <div className="sudoku-board">
            {newBoard.map((row, rowIndex) => (
                <div className={`sudoku-board__row sudoku-board__row${rowIndex + 1}`} key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <SudokuCell
                            key={colIndex}
                            value={cell}
                            isInitialValue={board[rowIndex][colIndex] !== undefined}
                            onChange={(newValue) => handleCellChange(rowIndex, colIndex, newValue)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SudokuBoard;
