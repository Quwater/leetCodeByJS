/**
 * @name Make Two Arrays Equal by Reversing Sub-arrays
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function (target, arr) {
    if (target.length !== arr.length) {
        return false;
    }
    const newArr1 = target.sort((a, b) => a - b);
    const newArr2 = arr.sort((a, b) => a - b);
    for (let i = 0; i < newArr1.length; i++) {
        if (newArr1[i] !== newArr2[i]) {
            return false;
        }
    }
    return true;
};

canBeEqual([1, 12], [12, 1]);
