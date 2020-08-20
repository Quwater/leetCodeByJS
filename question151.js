/**
 * @name Reverse Words in a String
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    const arr = s.split(' ');
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
            res.push(arr[i]);
        }
    }
    return res.join(' ');
};

reverseWords('a, b');
