import React, { useEffect, useState } from 'react';
import { useSudokuContext } from '../context';

const SudokuCell = ({ value, row, col, isInitialValue, onChange, onClick, isActive }) => {
    const [light, setLight] = useState('');
    const [lightError, setLightError] = useState('');
    const { setShowHighlight, setShowNumber, showNumber,
        showError, setShowError, setInputRow, setInputCol, setShowInput } = useSudokuContext();

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const newValue = parseInt(inputValue[inputValue.length - 1], 10) || undefined; // Отримати останню цифру або встановити 0, якщо ввід порожній або не число
        onChange(newValue);
    };


    useEffect(() => {
        if (value === undefined) {
            setLight('');
            setLightError('');
        } else if (value === showNumber) {
            if (showError) {
                setLight('');
                setLightError('sudoku-board__cell-red');
            } else {
                setLightError('');
                setLight('sudoku-board__cell-light');
            }
        } else {
            setLight('');
            setLightError('');
        }
    }, [showNumber])

    const lightNum = () => {
        setInputRow(row)
        setInputCol(col)
        setShowInput(true)
        if (value === undefined) {
        } else if (showError) {
            setShowHighlight(false)
            setShowError(false)
            setShowNumber(value)
            setLightError('sudoku-board__cell-red');
        } else if (value !== showNumber) {
            setShowHighlight(true)
            setShowError(false)
            setShowNumber(value)
        } else {
            setShowError(false)
            setShowHighlight(false)
            setShowNumber(undefined)
        }
    };

    return (
        <input
            type="number"
            className={`sudoku-board__cell ${isInitialValue ? 'sudoku-board__cell-const' : ''
                } ${showError ? lightError : light} ${isActive ? 'active' : ''}`} // Використовуємо isActive для встановлення стилів активного input
            value={value || ''}
            onChange={handleChange}
            onClick={lightNum}
            readOnly={isInitialValue}
            min={1}
            max={9}
        />
    );
};

export default SudokuCell;
