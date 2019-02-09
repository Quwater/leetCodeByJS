/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// O(n)
let numJewelsInStones = function(J, S) {
    let stone = {},
        counts = 0;
    for (let i of S) {
        stone[i] = stone[i] + 1 || 1;
    }
    for (let i of J) {
        if (stone[i]) {
            counts += stone[i];
        }
    }
    return counts;
    // let s = S.split(''),
    //     j = J.split('');
    // let res = s.filter(c => j.indexOf(c) >= 0);
    // return res.length;
};
numJewelsInStones('a', 'aaaa');