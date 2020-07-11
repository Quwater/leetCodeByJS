/**
 * @name Count of Smaller Numbers After Self
 * @param {number[]} nums
 * @return {number[]}
 */
// const countSmaller = function(nums) {
//     const counts = [];
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[i]) {
//                 count++;
//             }
//         }
//         counts.push(count);
//     }
//     return counts;
// };
const countSmaller = (nums) => {
    const len = nums.length;
    if (len == 0) return nums;
    const counts = new Array(len);
    const sorted = [];
    for (let i = len - 1; i >= 0; i--) {
        const index = findIndex(sorted, nums[i]); // 当前数字理应出现在右边排序后的位置，也即是有index个右边元素比它小
        sorted.splice(index, 0, nums[i]); // 将nums[i]插入到sorted数组的index处
        counts[i] = index; // 将index存到counts数组的索引i处
    }
    return counts;
};

const findIndex = (arr, target) => {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (arr[mid] < target) {
            // 目标值比中间元素大，mid不是想要的
            lo = mid + 1; // 最后返回的是lo，逼到mid+1,
        } else {
            // 目标值小于等于中间元素
            hi = mid; // mid可能是想要的，hi不能mid-1
        }
    }
    if (arr[lo] < target) return lo + 1; // target正好比lo元素大，lo还需+1
    return lo; // 否则 返回lo
};

countSmaller([5, 2, 6, 1]);
