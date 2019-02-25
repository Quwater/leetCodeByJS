/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// O(n) 
let findTheDifference = function(s, t) {
    // let num1 = {},
    //     num2 = {};
    // for (let i of s) {
    //     num1[i] = num1[i] + 1 || 1;
    // }
    // for (let i of t) {
    //     num2[i] = num2[i] + 1 || 1;
    //     if (!s.includes(i) || num2[i] > num1[i]) {
    //         return i;
    //     }
    // }
    let sumS = 0,
        sumT = 0;
    for (let i of s) {
        sumS += i.charCodeAt(0);
    }
    for (let i of t) {
        sumT += i.charCodeAt(0);
    }
    return String.fromCharCode(sumT-sumS);
};
findTheDifference('abcd', 'abcde');