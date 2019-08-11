/**
 * @name Day of the year
 * @param {string} date
 * @return {number}
 */
let dayOfYear = function(date) {
    let arr = date.split('-');
    let leap = isLeap(parseInt(arr[0]));
    let numDay = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let months = parseInt(arr[1]);
    let days = parseInt(arr[2]);
    if (leap && months > 2) {
        return numDay[months - 1] + days + 1;
    }
    return numDay[months - 1] + days;
};

let isLeap = function(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
};

dayOfYear('2004-03-01');
