/**
 * @param {string} s
 * @return {number}
 */
let titleToNumber = function(s) {
    // let len = s.length;
    // let res = 0;
    // for (let i = 0; i < len; i++) {
    //     res += (s.charCodeAt(i) - 'A'.charCodeAt(0)) * Math.pow(26, len-i-1);

    // }
    // return res;
    return [...s].reduce((acc, val) => acc * 26 + val.charCodeAt(0) - 'A'.charCodeAt(0) + 1, 0);
};
titleToNumber('A');