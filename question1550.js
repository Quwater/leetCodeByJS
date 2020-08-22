/**
 * @name Three Consecutive Odds
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
    if (arr.length < 3) {
        return false;
    }
    for (let i = 0; i < arr.length - 2; ) {
        if (arr[i] % 2 === 1) {
            if (arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
                return true;
            } else {
                i += 2;
            }
        } else {
            i++;
        }
    }
    return false;
};
threeConsecutiveOdds([1, 2, 3]);
