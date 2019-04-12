/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// O(N)
// binary search
let shipWithinDays = function(weights, D) {
    let left = 1;
    let right = 50000;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        let count = 1, temp = 0;
        for(let i = 0; i < weights.length; i++) {
            if (weights[i] > mid) {
                count = D + 1;
                break;
            }
            temp += weights[i];
            if (temp > mid) {
                count += 1;
                temp = weights[i];
            }
        }
        if (count > D) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return right;
};
shipWithinDays([1,2,3,1,1], 4);