/**
 * @name Can Make Arithmetic Progression From Sequence
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b);
    let gap = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== gap) {
            return false;
        }
    }
    return true;
};

canMakeArithmeticProgression([1, 2, 3]);
