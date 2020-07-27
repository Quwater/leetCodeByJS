/**
 * @name Number of Sub-arrays With Odd Sum
 * @param {number[]} arr
 * @return {number}
 */
const numOfSubarrays = function (arr) {
    // let res = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     let temp = arr[i];
    //     if (temp % 2 === 1) {
    //         res++;
    //     }
    //     for (let j = i+1; j < arr.length; j++) {
    //         temp += arr[j];
    //         if (temp % 2 === 1) {
    //             res++;
    //         }
    //     }
    //     res = res % 1000000007;
    // }
    // return res;

    // let temp = [1, 0]
    // let res = 0, val = 0;
    // for (let i of arr) {
    //     val = (val + i) % 2;
    //     temp[val]++;
    // }
    // res = temp[0] * temp[1] % 1000000007;
    // return res;

    // even 是到当前 i所拥有的偶数子数列数目，odd 是当前 i所拥有的奇数子数列数目
    // odd 即为之前 even + 1，even 即为之前的 odd。
    let even = 0,
        odd = 0,
        res = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            even++;
        } else {
            let temp = even;
            even = odd;
            odd = temp + 1;
        }
        res += odd;
    }
    return res % 1000000007;
};

numOfSubarrays([1, 3, 5]);
