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
    // two pointers
    // let prevRunLength = 0,
    //     curRunLength = 1,
    //     res = 0;
    // for (let i = 1; i < s.length; i++) {
    //     if (s.charAt(i) === s.charAt(i - 1)) {
    //         curRunLength++;
    //     } else {
    //         prevRunLength = curRunLength;
    //         curRunLength = 1;
    //     }

    //     if (prevRunLength >= curRunLength) {
    //         res++;
    //     }
    // }
    // return res;

    let p = 1,
        count = 1,
        last = 0,
        res = 0;
    while (p < s.length) {
        if (s[p] === s[p - 1]) {
            count++;
        } else {
            res += Math.min(count, last);
            last = count;
            count = 1;
        }
        if (p === s.length - 1) {
            res += Math.min(count, last);
        }
        p++;
    }
    return res;
};
countBinarySubstrings();
