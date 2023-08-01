import React, { useEffect, useState } from 'react';

const SudokuCell = ({ value, isInitialValue, onChange }) => {
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showNum, setShowNum] = useState(0);
    const [light, setLight] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const newValue = parseInt(inputValue[inputValue.length - 1], 10) || 0; // Отримати останню цифру або встановити 0, якщо ввід порожній або не число
        onChange(newValue);
    };

    useEffect(() => {
        if (showNum !== 0) {
            if (showNum === value) {
                if (showError) {
                    setLight('sudoku-board__cell-light');
                } else {
                    setLight('');
                }
            } else {
                setLight('');
            }
        }
    }, [show]);

    const lightNum = (value) => {
        if (value !== undefined && !isInitialValue) {
            setShow(!show);
            setShowNum(value);
        }
    };

    return (
        <input
            type="number"
            className={`sudoku-board__cell ${isInitialValue ? 'sudoku-board__cell-const' : ''} ${light}`}
            value={value || ''}
            onChange={handleChange}
            onClick={() => lightNum(value)}
            readOnly={isInitialValue}
            min={1}
            max={9}
        />
    );
};

export default SudokuCell;
