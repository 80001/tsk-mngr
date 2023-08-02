function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isValidMove(board, num, row, col) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValidMove(board, num, row, col)) {
                        board[row][col] = num;

                        if (solveSudoku(board)) {
                            return true;
                        }

                        board[row][col] = 0;
                    }
                }

                return false;
            }
        }
    }

    return true;
}

export function generateRandomSudoku(difficulty = 80) {
    const board = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Заповнюємо діагональні блоки унікальними числами
    for (let i = 0; i < 9; i += 3) {
        fillDiagonalBlock(board, i, i);
    }

    // Вирішуємо судоку для заповнених діагоналей
    solveSudoku(board);

    // Випадково замінюємо деякі числа на null expert=70  hurd=65 easy=55 medium=60
    const emptyCells = difficulty; // Кількість порожніх комірок (можна змінити за бажанням)
    for (let i = 0; i < emptyCells; i++) {
        const row = getRandomNumber(0, 8);
        const col = getRandomNumber(0, 8);
        board[row][col] = undefined;
    }

    return board;
}

function fillDiagonalBlock(board, row, col) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffleArray(nums);

    let numIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[row + i][col + j] = nums[numIndex];
            numIndex++;
        }
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomNumber(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

