/**
 * @name Alphabet Board Path
 * @param {string} target
 * @return {string}
 */
let alphabetBoardPath = function(target) {
    let board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z'];

    let str = board.join(''),
        arr = [],
        location = [],
        res = '';
    for (let i = 0; i < target.length; i++) {
        arr.push(str.indexOf(target[i]));
    }
    for (let i = 0; i < arr.length; i++) {
        let coordinate = [];
        coordinate.push(Math.floor(arr[i] / 5));
        coordinate.push(Math.floor(arr[i] % 5));
        location.push(coordinate);
    }
    for (let i = 0; i < location.length; i++) {
        let interval = [];
        if (i === 0) {
            interval = [location[0][0], location[0][1]];
        } else {
            interval = [
                location[i][0] - location[i - 1][0],
                location[i][1] - location[i - 1][1]
            ];
        }
        if (
            location[i][0] === 5 &&
            location[i][1] === 0 &&
            interval[0] !== 0 &&
            interval[1] !== 0
        ) {
            let way = helper(interval).slice(1) + 'D' + '!';
            res += way;
        } else {
            res += helper(interval) + '!';
        }
    }
    return res;
};

let helper = function(arr) {
    let str = '';
    if (arr[0] > 0) {
        while (arr[0] != 0) {
            str += 'D';
            arr[0] -= 1;
        }
    }
    if (arr[0] <= 0) {
        while (arr[0] != 0) {
            str += 'U';
            arr[0] += 1;
        }
    }
    if (arr[1] > 0) {
        while (arr[1] != 0) {
            str += 'R';
            arr[1] -= 1;
        }
    }
    if (arr[1] <= 0) {
        while (arr[1] != 0) {
            str += 'L';
            arr[1] += 1;
        }
    }
    return str;
};

alphabetBoardPath('zz');
