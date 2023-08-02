import React, { createContext, useContext, useState } from 'react';

const SudokuContext = createContext();

export const SudokuProvider = ({ children }) => {
    const [showHighlight, setShowHighlight] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [showNumber, setShowNumber] = useState(undefined);
    const [showNumberError, setShowNumberError] = useState(undefined);
    const [difficulty, setDifficulty] = useState(60);
    const [inputValue, setInputValue] = useState(undefined);
    const [inputRow, setInputRow] = useState(undefined);
    const [inputCol, setInputCol] = useState(undefined);
    const [isGameOver, setIsGameOver] = useState(false); // Змінено ім'я поля для закінчення гри
    const [records, setRecords] = useState({
        easy: [24, 51],    // Змінено формат часу на числовий
        medium: [71, 83],  // Змінено формат часу на числовий
        hard: [98, 115],   // Змінено формат часу на числовий
        expert: [123, 143],// Змінено формат часу на числовий
    });

    return (
        <SudokuContext.Provider value={{
            records,
            setRecords,
            isGameOver,       // Змінено ім'я поля для закінчення гри
            setIsGameOver,    // Змінено ім'я функції для закінчення гри
            difficulty,
            setDifficulty,
            showError,
            setShowError,
            showNumberError,
            setShowNumberError,
            showHighlight,
            setShowHighlight,
            showNumber,
            setShowNumber,
            inputValue,
            setInputValue,
            inputCol,
            setInputCol,
            inputRow,
            setInputRow,
            showInput,
            setShowInput
        }}>
            {children}
        </SudokuContext.Provider>
    );
};

export const useSudokuContext = () => {
    return useContext(SudokuContext);
};
