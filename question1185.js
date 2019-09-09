/**
 * @name Day of the Week
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
let dayOfTheWeek = function(day, month, year) {
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = [
        'Friday',
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
    ];
    let years = year - 1971;
    let leapYears = Math.ceil((years - 1) / 4);
    let yearDays = (years - leapYears) * 365 + leapYears * 366 - 1;
    for (let i = 1; i < month; i++) {
        yearDays += monthDays[i - 1];
    }
    yearDays += day;
    if (isLeap(year) && month > 2) {
        yearDays += 1;
    }
    return days[yearDays % 7];
};

let isLeap = function(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
    } else if (year % 4 === 0) {
        return true;
    }
    return false;
};

dayOfTheWeek(15, 8, 1993);
