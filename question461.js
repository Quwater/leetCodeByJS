/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// log(n)
let hammingDistance = function(x, y) {
    // let a = Math.max(x, y).toString(2),
    //     b = Math.min(x, y).toString(2);
    // let distance = a.length - b.length,
    //     res = 0;
    // while(distance > 0) {
    //     b = '0' + b;
    //     distance--;
    // }
    // for ( let i = 0; i < a.length; i++) {
    //     if (a[i] !== b[i]) {
    //         res++;
    //     }
    // }
    // return res;
    let count = 0;
    while (x > 0 || y > 0) {
        if (x % 2 != y % 2) {
            count++;
        }
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
    }
    return count;
};
hammingDistance(1, 4);