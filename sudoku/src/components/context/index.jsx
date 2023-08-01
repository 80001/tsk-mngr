import React, { createContext, useContext, useState } from 'react';

const SudokuContext = createContext();

export const SudokuProvider = ({ children }) => {
    const [showHighlight, setShowHighlight] = useState(false);

    return (
        <SudokuContext.Provider value={{ showHighlight, setShowHighlight }}>
            {children}
        </SudokuContext.Provider>
    );
};

export const useSudokuContext = () => {
    return useContext(SudokuContext);
};
