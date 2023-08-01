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
export const initialBoard3 = [
    // Заповнити цю матрицю початковими значеннями судоку для гри.
    // Використовуйте null або 0 для пустих комірок.
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

export const checkBoard = {
    startArray: [],
    rows: [],
    columns: [],
    coubs: [],
    error: false,
    completed: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    setRow: () => {
        for (let x = 0; x < 9; x++) {
            checkBoard.rows[x] = checkBoard.startArray[x];
        }
    },

    setColumns: () => {
        for (let x = 0; x < 9; x++) {
            checkBoard.columns[x] = [];
            checkBoard.startArray.forEach(row => {
                checkBoard.columns[x].push(row[x]);
            });
        }
    },

    setCoubs: () => {
        for (let cubRow = 0; cubRow < 3; cubRow++) {
            for (let cubCol = 0; cubCol < 3; cubCol++) {
                const cubIndex = cubRow * 3 + cubCol;
                checkBoard.coubs[cubIndex] = [];
                for (let i = cubRow * 3; i < cubRow * 3 + 3; i++) {
                    for (let j = cubCol * 3; j < cubCol * 3 + 3; j++) {
                        checkBoard.coubs[cubIndex].push(checkBoard.startArray[i][j]);
                    }
                }
            }
        }
    },
    setCheck: (row, col) => {
        const filterUndefined = (arr) => arr.filter(value => value !== undefined);

        const filteredRow = filterUndefined(checkBoard.rows[row]);
        const filteredColumn = filterUndefined(checkBoard.columns[col]);

        const cubRow = Math.floor(row / 3);
        const cubCol = Math.floor(col / 3);
        const cubIndex = cubRow * 3 + cubCol;
        const filteredCub = filterUndefined(checkBoard.coubs[cubIndex]);

        const isRowUnique = new Set(filteredRow).size === filteredRow.length;
        const isColumnUnique = new Set(filteredColumn).size === filteredColumn.length;
        const isCubUnique = new Set(filteredCub).size === filteredCub.length;

        if (isRowUnique && isColumnUnique && isCubUnique) {
            console.log('Unique values in row, column, and cub:', row, col);
            if (checkBoard.error === true) {
                console.log('chisdawf', row, col);
                checkBoard.error = false
            }
        } else {
            console.log('error!')
            checkBoard.error = true
        }
    },




    init: (initBoard) => {
        checkBoard.startArray = initBoard
        checkBoard.setRow();
        checkBoard.setColumns();
        checkBoard.setCoubs();
    },
    update: (row, col, value) => {
        if (value) {
            console.log('xx')
            checkBoard.startArray[row][col] = value
            checkBoard.setRow();
            checkBoard.setColumns();
            checkBoard.setCoubs();
            checkBoard.setCheck(row, col)
            console.log("Updated startArray:", checkBoard.startArray)
        }
    },
    updateFull: (row, col, array) => {
        if (array) {
            checkBoard.startArray = array
            checkBoard.setCheck(row, col)
            console.log("Updated startArray:", checkBoard.startArray)
        }
    }
}