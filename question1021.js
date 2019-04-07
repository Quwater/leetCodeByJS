/**
 * @param {string} S
 * @return {string}
 */
let removeOuterParentheses = function(S) {
    let res = '',
        left = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            if (left > 0) {
                res += S[i];
            }
            left++;
        }
        if (S[i] === ')') {
            if (left > 1) {
                res += S[i];
            }
            left--;
        }
    }
    return res;
};
removeOuterParentheses('(()())(())');