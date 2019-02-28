/**
 * @param {number[]} A
 * @return {number[]}
 */
// O(n2)
let pancakeSort = function(A) {
    let res = [],
        len = A.length;
    while (len > 0) {
        // 每次都将最大值翻转到最前面，然后翻转到最后面，迭代到最后一个值。
        let maxIndex = A.indexOf(Math.max(...A));
        if (maxIndex  === len - 1) {
            A.splice(len-1, 1);
            len--;
            continue;
        } else {
            res.push(maxIndex+1, len);
            A = A.slice(0, maxIndex+1).reverse().concat(A.slice(maxIndex+1)).reverse();
        }
        A.splice(len-1, 1);
        len--;
    }
    return res;
};
pancakeSort();