/**
 * @name Detect Pattern of Length M Repeated K or More Times
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
const containsPattern = function (arr, m, k) {
    let len = arr.length;
    let str = arr.join('');
    for (let i = 0; i <= len - m * k; i++) {
        let model = str.slice(i, i + m);
        let s = str.slice(i);
        let count = 0;
        while (s.length > 0) {
            if (s.indexOf(model) === 0) {
                count++;
            } else {
                break;
            }
            s = s.slice(m);
            if (count === k) {
                return true;
            }
        }
    }
    return false;
};
