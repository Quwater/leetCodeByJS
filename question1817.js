/**
 * @name Finding the Users Active Minutes
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function (logs, k) {
    let map = {};
    for (let i = 0; i < logs.length; i++) {
        if (!map[logs[i][0]]) {
            map[logs[i][0]] = [logs[i][1]];
        }
        if (map[logs[i][0]] && !map[logs[i][0]].includes(logs[i][1])) {
            map[logs[i][0]].push(logs[i][1]);
        }
    }
    let arr = new Array(k).fill(0);
    for (let i in map) {
        arr[map[i].length - 1]++;
    }
    return arr;
};
