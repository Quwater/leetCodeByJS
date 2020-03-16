/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
    let res = '';
    if (n % 2 === 0) {
        for (let i = 0; i <= n - 1; i++) {
            if (i === 0) {
                res += 'a';
            } else {
                res += 'b';
            }
        }
    } else {
        for (let i = 0; i <= n - 1; i++) {
            if (i === 0) {
                res += 'a';
            } else if (i < n - 1) {
                res += 'b';
            } else {
                res += 'c';
            }
        }
    }

    return res;
};

generateTheString(4);
