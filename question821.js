/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
// O(n)
let shortestToChar = function (S, C) {
    let len = S.length,
        distance = [],
        pre = -len;

    for (let i = 0; i < len; i++) {
        if (S.charAt(i) === C) {
            pre = i;
        }
        distance.push(i - pre);
    }
    for (let i = len - 1; i >= 0; i--) {
        if (S.charAt(i) === C) {
            pre = i;
        }
        distance[i] = Math.min(distance[i], Math.abs(pre - i));
    }

    return distance;
};
shortestToChar();