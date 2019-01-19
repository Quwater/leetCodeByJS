/**
 * @param {string} s
 * @return {number}
 */
let countBinarySubstrings = function (s) {
    // let count = 0;
    // for (let i = 0; i < s.length-1; i++) {
    //     if (s[i] !== s[i+1]) {
    //         count++;
    //         let j = 1;
    //         while (s[i - j] === s[i] && s[i+1] === s[i + j + 1]) {
    //             count++;
    //             j++;
    //         }
    //     }
    // }
    // return count;

    // more clever solution
    let prevRunLength = 0,
        curRunLength = 1,
        res = 0;
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            curRunLength++;
        } else {
            prevRunLength = curRunLength;
            curRunLength = 1;
        }

        if (prevRunLength >= curRunLength) {
            res++;
        }
    }
    return res;
};
countBinarySubstrings();