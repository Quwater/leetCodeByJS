/**
 * @name Array Nesting
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    var max = Number.MIN_VALUE;
    var visited = [];
    for (var i = 0; i < nums.length; i++) {
        // 如果该索引已被访问，便跳过
        if (visited[i])
            continue;
        max = Math.max(max, calcLength(nums, i, visited));
    }
    return max;
};

var calcLength = function (nums, start, visited) {
    var i = start,
        count = 0;
    // 开始后便不能再与初始值重复。没找到一个，将其 visited 属性赋予真
    while (count == 0 || i != start) {
        visited[i] = true;
        i = nums[i];
        count++;
    }
    return count;
};