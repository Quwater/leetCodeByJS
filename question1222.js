/**
 * @name Queens That Can Attack the King
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
let queensAttacktheKing = function(queens, king) {
    let m = king[0],
        n = king[1],
        res = [],
        map = {};
    for (let i = 0; i < queens.length; i++) {
        map[queens[i]] = i;
    }
    // [0, 1] !== [0, 1];
    // Arrays are converted to strings implicitly when used as object keys.

    while (n >= 0) {
        if (map.hasOwnProperty([m, n - 1])) {
            res.push([m, n - 1]);
            break;
        }
        n--;
    }
    n = king[1];

    while (m < 8) {
        if (map.hasOwnProperty([m + 1, n])) {
            res.push([m + 1, n]);
            break;
        }
        m++;
    }
    m = king[0];

    while (n < 8) {
        if (map.hasOwnProperty([m, n + 1])) {
            res.push([m, n + 1]);
            break;
        }
        n++;
    }
    n = king[1];

    while (m >= 0) {
        if (map.hasOwnProperty([m - 1, n])) {
            res.push([m - 1, n]);
            break;
        }
        m--;
    }
    m = king[0];

    while (m < 8 && n >= 0) {
        if (map.hasOwnProperty([m + 1, n - 1])) {
            res.push([m + 1, n - 1]);
            break;
        }
        m++;
        n--;
    }
    m = king[0];
    n = king[1];

    while (m < 8 && n < 8) {
        if (map.hasOwnProperty([m + 1, n + 1])) {
            res.push([m + 1, n + 1]);
            break;
        }
        m++;
        n++;
    }
    m = king[0];
    n = king[1];

    while (m >= 0 && n < 8) {
        if (map.hasOwnProperty([m - 1, n + 1])) {
            res.push([m - 1, n + 1]);
            break;
        }
        m--;
        n++;
    }
    m = king[0];
    n = king[1];

    while (m >= 0 && n >= 0) {
        if (map.hasOwnProperty([m - 1, n - 1])) {
            res.push([m - 1, n - 1]);
            break;
        }
        m--;
        n--;
    }
    m = king[0];
    n = king[1];

    return res;
};

queensAttacktheKing([[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], [0, 0]);
