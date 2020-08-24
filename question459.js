/**
 * @name Repeated Substring Pattern
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    // let res = '';
    // for (let i = 1; i <= s.length / 2; i++) {
    //     if (s.length % i === 0) {
    //         let temp = s.substring(0, i);
    //         let str = '';
    //         for (let j = 1; j <= s.length / i; j++) {
    //             str += temp;
    //         }
    //         if (str === s) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // 如果从第二个元素开始算起，能够找到一个 S。且它是在两个 s 中间，则证明肯定是由重复的子串组成
    return (s + s).indexOf(s, 1) != s.length;
};

repeatedSubstringPattern('abba');
