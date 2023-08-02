export const formatTime = (timer) => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
};
export const determineDifficulty = (difficulty) => {
    console.log(difficulty)
    if (difficulty === 70) {
        return 'expert';
    } else if (difficulty === 65) {
        return 'hard';
    } else if (difficulty === 60) {
        return 'medium';
    } else if (difficulty === 5) {
        return 'easy';
    }
};