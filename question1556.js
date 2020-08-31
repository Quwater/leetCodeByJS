/**
 * @name Thousand Separator
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function (n) {
    let str = n.toString(),
        res = [];
    if (str.length <= 3) {
        return str;
    }
    for (let i = str.length - 1; ; ) {
        res.unshift(str.slice(i - 2, i + 1));
        i -= 3;
        if (i < 2 && i >= 0) {
            res.unshift(str.slice(0, i + 1));
            break;
        } else if (i < 0) {
            break;
        }
    }
    return res.join('.');
};
