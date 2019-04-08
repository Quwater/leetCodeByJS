/**
 * @name Beautiful Arrangement II
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
let constructArray = function (n, k) {
    // let res = new Array(n);
    // let c = 0;
    // for (let v = 1; v < n - k; v++) {
    //     res[c++] = v;
    // }
    // for (let i = 0; i <= k; i++) {
    //     res[c++] = (i % 2 === 0) ? (n-k + i/2) : (n - i/2);
    // }
    // return res;
    let res = new Array(n);
    for (var i = 0; i < n; i++) {
        res[i] = i + 1;
    }
    // 每一次转移最后一项，增加两种差值，k-=2
    for (; k > 1; k -= 2) {
        let a = res.pop();
        res.splice(n - k, 0, a);
    }
    return res;
};
constructArray(3, 2);