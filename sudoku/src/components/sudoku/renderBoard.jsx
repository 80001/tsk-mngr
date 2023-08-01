import React, { useEffect, useState } from 'react';
import SudokuCell from './renderCells';
import { checkBoard } from './numbersArrays';

const SudokuBoard = ({ board }) => {
    const [newBoard, setNewBoard] = useState(board)
    useEffect(() => {
        checkBoard.init(board)
        setNewBoard(checkBoard.startArray)
    }, [])
    useEffect(() => {
        console.log(checkBoard.startArray)
        console.log(checkBoard.rows)
        console.log(checkBoard.columns)
        console.log(checkBoard.coubs)
        console.log('new', newBoard)
    }, [newBoard])


    return (
        <div className="sudoku-board">
            {newBoard.map((row, rowIndex) => (
                <div className={`sudoku-board__row sudoku-board__row${rowIndex + 1}`} key={rowIndex} >
                    {
                        row.map((cell, colIndex) => (
                            <SudokuCell key={colIndex} value={cell} />
                        ))
                    }
                </div>
            ))
            }
        </div >
    )
};

export default SudokuBoard;
