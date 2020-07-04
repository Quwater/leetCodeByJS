/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
const canArrange = function (arr, k) {
    // 利用余数之和组数是否相等来判定
    let mod = new Array(k).fill(0);
    for (let i of arr) {
        mod[((i % k) + k) % k]++;
    }
    for (let i = 1; i < k / 2; i++) {
        if (mod[i] !== mod[k - i]) {
            return false;
        }
    }
    return mod[0] % 2 === 0;
};

canArrange([1, 2, 3, 4, 5, 6], 7);
