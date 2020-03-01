/**
 * @name Number of Days Between Two Dates
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = function(date1, date2) {
    let arr1 = date1.split('-').map(Number),
        arr2 = date2.split('-').map(Number);
    let first = new Date(arr1[0], arr1[1] - 1, arr1[2]),
        second = new Date(arr2[0], arr2[1] - 1, arr2[2]);
    return Math.abs(Math.round((second - first) / (1000 * 60 * 60 * 24)));
};
daysBetweenDates('2020-01-15', '2019-12-31');
