/**
 * @name Maximum Number of Balloons
 * @param {string} text
 * @return {number}
 */
let maxNumberOfBalloons = function(text) {
    let map = {},
        arr = ['b', 'a', 'n', 'l', 'o'];
    for (let i = 0; i < text.length; i++) {
        map[text[i]] = map[text[i]] + 1 || 1;
    }
    for (let i of arr) {
        if (!map[i]) {
            return 0;
        }
    }
    return Math.min(
        map['b'],
        map['a'],
        map['n'],
        Math.floor(map['l'] / 2),
        Math.floor(map['o'] / 2)
    );
};
maxNumberOfBalloons('leetcode');
