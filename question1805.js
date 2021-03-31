/**
 * @name Number of Different Integers in a String
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function (word) {
    let str = word.replace(/[a-z]/g, ' ');
    let temp = '';
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i];
        } else if (temp.length !== 0) {
            arr.push(parseInt(temp));
            temp = '';
        }
        if (i === str.length - 1 && temp.length !== 0) {
            arr.push(parseInt(temp));
            temp = '';
        }
    }
    let res = [...new Set(arr)];
    return res.length;
};
