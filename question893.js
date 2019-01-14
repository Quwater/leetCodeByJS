/**
 * @param {string[]} A
 * @return {number}
 */
let numSpecialEquivGroups = function (A) {
    let count = 0;
    let map = {};
    for (let i = 0; i < A.length; i++) {
        let odd = [];
        let even = [];
        for (let j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) {
                even.push(A[i][j]);
            } else {
                odd.push(A[i][j]);
            }
        }

        even.sort();
        odd.sort();

        let key = even.join('') + odd.join('');
        if (!map[key]) {
            map[key] = true;
            count++;
        }
    }

    return count;
};
numSpecialEquivGroups();