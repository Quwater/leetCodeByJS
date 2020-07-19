/**
 * @name Valid Number
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
    if (s == null || s.length == 0) return false;
    let numSeen = false;
    let dotSeen = false;
    let eSeen = false;
    let arr = s.trim().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            numSeen = true;
        } else if (arr[i] === '.') {
            if (dotSeen || eSeen) {
                return false;
            }
            dotSeen = true;
        } else if (arr[i] === 'E' || arr[i] === 'e') {
            if (eSeen || !numSeen) {
                return false;
            }
            eSeen = true;
            // 保证 e 后有数字
            numSeen = false;
        } else if (arr[i] == '+' || arr[i] == '-') {
            if (i !== 0 && arr[i - 1] !== 'e' && arr[i - 1] !== 'E') {
                return false;
            }
        } else {
            return false;
        }
    }
    return numSeen;
};

isNumber('0');
