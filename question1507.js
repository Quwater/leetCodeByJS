/**
 * @name Reformat Date
 * @param {string} date
 * @return {string}
 */
const reformatDate = function (date) {
    let dateArr = date.split(' '),
        monthArr = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
    let day = parseInt(dateArr[0]);
    if (day < 10) {
        day = '0' + day;
    }
    let month = monthArr.indexOf(dateArr[1]) + 1;
    if (month < 10) {
        month = '0' + month;
    }
    return `${dateArr[2]}-${month}-${day}`;
};

reformatDate('26th May 1960');
