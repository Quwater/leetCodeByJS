/**
 * @name Diet Plan Performance
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
let dietPlanPerformance = function(calories, k, lower, upper) {
    let temp = 0,
        tempNum = 0,
        points = 0;
    for (let i = 0; i < calories.length; i++) {
        temp += calories[i];
        tempNum += 1;
        if (tempNum === k) {
            if (temp < lower) {
                points -= 1;
            }
            if (temp > upper) {
                points += 1;
            }
            temp -= calories[i - k + 1];
            tempNum -= 1;
        }
    }
    return points;
};
dietPlanPerformance([3, 2], 2, 0, 1);
