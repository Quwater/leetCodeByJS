/**
 * @name Non-decreasing Array
 * @param {number[]} nums
 * @return {boolean}
 */
var isSorted = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i+1]) {
            return false;
        }
    }
    return true;
}
var checkPossibility = function(nums) {
    for (let i = 0; i < nums.length-1; i++){
        if (nums[i] > nums[i+1]){
            // 要么将 nums[i]改成 nums[i+1]成立，要么将 nums[i+1]改成 nums[i]成立
            // 否则不会只用改变一个值就能成为升序排列

            let temp = nums[i];

            // "erase" nums[i], then check if nums is sorted without nums[i]

            nums[i] = nums[i+1];
            if (isSorted(nums)) {
                return true;
            }


            // "erase" nums[i+1], then check if nums is sorted without nums[i+1]

            nums[i+1] = nums[i] = temp;
            if (isSorted(nums)) {
                return true;
            }


            // nums is NOT sorted (without nums[i] XOR without nums[i+1])

            return false;
        }
    }
    return true;
};
