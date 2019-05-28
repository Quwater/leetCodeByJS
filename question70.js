/**
 * @param {number} n
 * @return {number}
 */
// O(N)
let climbStairs = function(n) {
    // if (n === 2) {
    //     return 2;
    // }
    // if (n === 1) {
    //     return 1;
    // }
    // return climbStairs(n-1) + climbStairs(n-2);
    
    let arr = new Array(n+1).fill(0);
    
    return climb_stairs(0, n, arr);
};

let climb_stairs = function(i, n, arr) {
    if (i > n) {
        return 0;
    }
    if (i === n) {
        return 1;
    }
    if (arr[i] !== 0) {
        return arr[i];
    }
    arr[i] = climb_stairs(i+1, n, arr) + climb_stairs(i+2, n, arr);
    return arr[i];
};

climbStairs(4);