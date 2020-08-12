/**
 * @name Can Convert String in K Moves
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
const canConvertString = function (s, t, k) {
    if (s.length !== t.length) {
        return false;
    }
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            let gap = s[i].charCodeAt(0) - t[i].charCodeAt(0);
            gap = gap > 0 ? 26 - gap : -gap;
            if (!arr[gap]) {
                arr[gap] = 0;
            }
            while (true) {
                if (!arr[gap + 26 * arr[gap]]) {
                    if (gap + 26 * arr[gap] > k) {
                        return false;
                    }
                    arr[gap + 26 * arr[gap]] = 1;
                    break;
                } else {
                    arr[gap]++;
                }
            }
        }
    }
    return true;
};
canConvertString();
