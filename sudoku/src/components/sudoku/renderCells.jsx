import React, { useEffect, useState } from 'react';

const SudokuCell = ({ value }) => {
    const [show, setShow] = useState(false)
    const [showNum, setShowNum] = useState(0)
    const [num, setNum] = useState(0)
    const [light, setLight] = useState('')
    const handleChange = (event) => {
        console.log(event.target.value)
        const newValue = parseInt(event.target.value, 10);
        setNum(newValue);
        if (!isNaN(newValue)) {
        } else {
            setNum(null);
        }
        // Додати код для збереження введеного значення в комірці, якщо потрібно.
        // Викликати відповідний обробник, якщо користувач вводить нове значення.
    }
    useEffect(() => {
        if (showNum !== 0) {
            console.log('if click num')
            if (showNum === value) {
                console.log('if same value')
                if (show) {
                    console.log('if click first')
                    setLight('sudoku-board__cell-light')
                } else {
                    console.log('off')
                    setLight('')
                }
            } else {
                console.log('not same value')
                setLight('')
            }
        }
    }, [show])
    const lightNum = (value) => {
        console.log('click num')
        setShow(!show)
        setShowNum(value)
        console.log(value, show)
    }
    if (value) {
        return (
            <input
                type="number"
                className={`sudoku-board__cell sudoku-board__cell-const ${light}`}
                value={value}
                onChange={() => { }}
                onClick={() => lightNum(value)}
                readOnly
            />
        )
    } else {
        return (
            <input
                maxLength={1}
                min={1}
                max={9}
                type="number"
                className={"sudoku-board__cell"}
                value={'' || value}
                onChange={handleChange}
            />
        )
    }
}

export default SudokuCell;
