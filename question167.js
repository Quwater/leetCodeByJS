/**
 * @name 167. Two Sum II - Input array is sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    // let map = new Map();
    // for (let i = 0; i < numbers.length; i++) {
    //     if (map.get(target - numbers[i])) {
    //         return [map.get(target - numbers[i]), i+1];
    //     }
    //     map.set(numbers[i], i+1);
    // }

    // 双指针
    // 避免循环两次，改为，左一次，右一次（小于目标，则左边小，大于目标，则右边大）
    let l = 0,
        r = numbers.length - 1,
        index = [];
    while (l < r) {
        let s = numbers[l] + numbers[r];
        if (s === target) {
            index.push(l + 1);
            index.push(r + 1);
            return index;
        } else if (s < target) {
            l += 1;
        } else {
            r -= 1;
        }
    }
};

twoSum([2, 7, 11, 15], 9);
