/**
 * @name Rearrange Spaces Between Words
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function (text) {
    let nums = 0;
    for (let i of text) {
        if (i === ' ') {
            nums++;
        }
    }
    let arr = text.trim().replace(/\s+/g, ' ').split(' ');
    if (arr.length - 1 === 0) {
        let reminder = '';
        for (let i = 0; i < nums; i++) {
            reminder += ' ';
        }
        return arr[0] + reminder;
    }
    let interval = Math.floor(nums / (arr.length - 1));
    let tem1 = '';
    for (let i = 0; i < interval; i++) {
        tem1 += ' ';
    }
    let reminder = nums % (arr.length - 1);
    let tem2 = '';
    for (let i = 0; i < reminder; i++) {
        tem2 += ' ';
    }
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res += tem1;
        res += arr[i];
    }
    res += tem2;
    return res;
};

reorderSpaces('   reorder');
