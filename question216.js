/**
 * @name Combination Sum III
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var solution = [];
	var result = [];
	var used = [];

	var backTracking = function(m, n) {
		if(m === k){
			var sum = 0;
			for (var i=0; i<solution.length; i++) {
				sum += solution[i];
			}
			if (sum === n) {
				result.push(solution.slice(0));
			}
		} else {
			for (var i=1; i<=9; ++i) {
                // 如果重复了，跳过
				if(used[i]){
                    continue;
                }
                // 元素只能从小到大
				if (m>0 && solution[m-1]>i) {
                    continue;
                }
				used[i] = true;
				solution[m] = i;
                // 递归
				arguments.callee(m+1, n);
				used[i] = false;
			}
		}
	}

	backTracking(0, n);

	return result;
};
