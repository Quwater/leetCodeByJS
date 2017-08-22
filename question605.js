/**
 * @name Can Place Flowers
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0;
    // 当count大于n时，便不用再统计了
    for (var i = 0; i < flowerbed.length && count < n; i++) {
        if (flowerbed[i] === 0) {
            var next = (i === flowerbed.length - 1) ? 0 : flowerbed[i+1];
            var prev = (i === 0) ? 0 : flowerbed[i - 1];
            if (next === 0 && prev === 0) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return count === n;

    // // 三种特殊情况
    // if (flowerbed.length === 1 && flowerbed[0] === 0) {
    //     count++;
    // }
    // if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    //     flowerbed[0] = 1;
    //     count++;
    // }
    // if (flowerbed[flowerbed.length-1] === 0 && flowerbed[flowerbed.length-2] === 0) {
    //     flowerbed[flowerbed.length-1] = 1;
    //     count++;
    // }
    // // 普遍情况
    // for (var i = 1; i < flowerbed.length-1; i++) {
    //     if (flowerbed[i-1] === 0 && flowerbed[i+1] === 0 && flowerbed[i] !== 1) {
    //         flowerbed[i] = 1;
    //         count++;
    //     }
    // }
    // if (count < n) {
    //     return false;
    // } else {
    //     return true;
    // }
};
