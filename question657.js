/**
 * @name 657-Judge Route Circle
 * @param {string} moves
 * @return {boolean}
 */

const judgeCircle = function (moves) {
    let x = 0,
        y = 0;
    for (let i of moves) {
        switch (i) {
            case 'U':
                y++;
                break;
            case 'R':
                x++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
        }
    }
    return x === 0 && y === 0;
};
