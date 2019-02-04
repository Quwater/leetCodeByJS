/**
 * @param {number} target
 * @return {number}
 */

// O(sqrt(n))
let reachNumber = function (target) {
    target = Math.abs(target);
    let k = 0;
    while (target > 0)
        target -= ++k;
    return target % 2 == 0 ? k : k + 1 + k % 2;
};
reachNumber(5);