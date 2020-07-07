/**
 * @name Average Salary Excluding the Minimum and Maximum Salary
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
    const sum = salary.reduce((a, b) => a + b);
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    return (sum - max - min) / (salary.length - 2);
};

average([1000, 2000, 3000]);
