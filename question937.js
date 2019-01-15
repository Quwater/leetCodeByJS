/**
 * @param {string[]} logs
 * @return {string[]}
 */
let reorderLogFiles = function (logs) {
    let letterLogs = [],
        digitLogs = [];

    logs.forEach(log => {
        if ((/[0-9]/i).test(log[log.indexOf(' ') + 1])) {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    });

    // Sort letter-logs
    letterLogs.sort(function (a, b) {
        let aWithoutId = a.substr(a.indexOf(' '), a.length);
        let bWithoutId = b.substr(b.indexOf(' '), b.length);

        return aWithoutId.localeCompare(bWithoutId);
    });

    return [...letterLogs, ...digitLogs];
};

reorderLogFiles();