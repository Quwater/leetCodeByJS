/**
 * @name Check If All 1's Are at Least Length K Places Away
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
    let interval = 0,
        intervals = [];
    let i = nums.indexOf(1);
    let newNums = nums.slice(i);
    for (let i = 0; i < newNums.length; i++) {
        if (nums[i] === 1 && interval !== 0) {
            intervals.push(interval);
            interval = 0;
        } else {
            interval++;
        }
    }
    return Math.min(...intervals) >= k;
};

kLengthApart([1, 0, 0, 1, 0, 1], 2);
