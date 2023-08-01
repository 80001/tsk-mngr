export const initialBoard = [
    // Заповнити цю матрицю початковими значеннями судоку для гри.
    // Використовуйте null або 0 для пустих комірок.
    [5, 3, undefined, undefined, 7, undefined, undefined, undefined, undefined],
    [6, undefined, undefined, 1, 9, 5, undefined, undefined, undefined],
    [undefined, 9, 8, undefined, undefined, undefined, undefined, 6, undefined],
    [8, undefined, undefined, undefined, 6, undefined, undefined, undefined, 3],
    [4, undefined, undefined, 8, undefined, 3, undefined, undefined, 1],
    [7, undefined, undefined, undefined, 2, undefined, undefined, undefined, 6],
    [undefined, 6, undefined, undefined, undefined, undefined, 2, 8, undefined],
    [undefined, undefined, undefined, 4, 1, 9, undefined, undefined, 5],
    [undefined, undefined, undefined, undefined, 8, undefined, undefined, 7, 9],
];
export const initialBoard2 = [
    // Заповнити цю матрицю початковими значеннями судоку для гри.
    // Використовуйте null або 0 для пустих комірок.
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
];

export const checkBoard = {
    startArray: [],
    rows: {},
    columns: {},
    coubs: {},
    completed: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    setRow: () => {
        for (let x = 1; x < 10; x++) {
            checkBoard.rows[`row${x}`] = initialBoard[x - 1];
        }
    },

    setColumns: () => {
        for (let x = 1; x < 10; x++) {
            checkBoard.columns[`column${x}`] = [];
            initialBoard.forEach(row => {
                checkBoard.columns[`column${x}`].push(row[x - 1]);
            });
        }
    },

    setCoubs: () => {
        for (let cubRow = 0; cubRow < 3; cubRow++) {
            for (let cubCol = 0; cubCol < 3; cubCol++) {
                const cubIndex = cubRow * 3 + cubCol + 1;
                checkBoard.coubs[`coub${cubIndex}`] = [];
                for (let i = cubRow * 3; i < cubRow * 3 + 3; i++) {
                    for (let j = cubCol * 3; j < cubCol * 3 + 3; j++) {
                        checkBoard.coubs[`coub${cubIndex}`].push(initialBoard[i][j]);
                    }
                }
            }
        }
    },
    setCheck: () => {

    },


    init: (initBoard) => {
        checkBoard.startArray = initBoard
        checkBoard.setRow(initBoard);
        checkBoard.setColumns(initBoard);
        checkBoard.setCoubs(initBoard);
    },
};

// Ініціал



