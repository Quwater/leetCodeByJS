/**
 * @param {string[]} A
 * @return {string[]}
 */
// O(n2)
let commonChars = function(A) {
    let res = [];
    if (A.length === 0) {
        return res;
    }
    let counter1 = counter(A[0]);
    for (let i = 1; i < A.length; i++) {
        let map = counter(A[i]);
        for (let j in counter1) {
            if (j in map) {
                counter1[j] = counter1[j] > map[j] ? map[j] : counter1[j];
            } else {
                delete counter1[j];
            }
        }
    }
    for (let i in counter1) {
        while (counter1[i] > 0) {
            res.push(i);
            counter1[i]--;
        }
        delete counter[i];
    }
    return res;
};
let counter = function(a) {
    let map = {};
    for (let i of a) {
        map[i] = map[i] + 1 || 1;
    }
    return map;
};
commonChars(['cool','lock','cook']);