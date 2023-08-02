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

export const checkBoard = {
    startArray: [],
    rows: [],
    columns: [],
    coubs: [],
    error: false,
    finish: false,
    numbers: {},

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
            //console.log('Unique values in row, column, and cub:', row, col);
            if (checkBoard.error === true) {
                console.log('error in', row, col);
                checkBoard.error = false
            }

        } else {
            console.log('error!')
            checkBoard.error = true
        }
        const flattenBoard = checkBoard.startArray.flat();
        const uniqueNumbers = new Set(flattenBoard);
        //no undefined here
        if (uniqueNumbers.size === 9) {
            checkBoard.finish = true

        }


    },
    checkNum: () => {
        const flattenBoard = checkBoard.startArray.flat();
        const numberCounts = new Array(10).fill(0); // Масив для підрахунку кількості кожної цифри (індекс 0 буде проігноровано)

        // Підраховуємо кількість кожної цифри в пазлі
        flattenBoard.forEach(num => {
            if (num !== undefined) {
                numberCounts[num]++;
            }
        });
        // Очищуємо об'єкт перед кожною перевіркою
        checkBoard.numbers = {};
        // Перевіряємо, чи кожна цифра зустрічається рівно 9 разів
        for (let i = 1; i <= 9; i++) {
            checkBoard.numbers[i] = numberCounts[i] === 9;
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
            checkBoard.startArray[row][col] = value
            checkBoard.setRow();
            checkBoard.setColumns();
            checkBoard.setCoubs();
            checkBoard.setCheck(row, col)
            //console.log("Updated startArray:", checkBoard.startArray)
        }
    }
}