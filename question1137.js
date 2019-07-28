/**
 * @name N-th Tribonacci Number
 * @param {number} n
 * @return {number}
 */
let tribonacci = function(n) {
    //     if (n === 0) {
    //         return 0;
    //     }
    //     if (n === 1 || n === 2) {
    //         return 1;
    //     }

    //     return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let arr = [0, 1, 1];
    let i = 3;
    while (i <= n) {
        arr.push(arr.reduce((a, b) => a + b));
        arr.shift();
        i++;
    }
    return arr[2];
};

tribonacci(4);
