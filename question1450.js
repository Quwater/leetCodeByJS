/**
 * @name  Number of Students Doing Homework at a Given Time
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function (startTime, endTime, queryTime) {
    let res = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            res++;
        }
    }
    return res;
};

busyStudent([1, 2, 3], [3, 2, 7], 4);
