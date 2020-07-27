/**
 * @name Bulb Switcher IV
 * @param {string} target
 * @return {number}
 */
const minFlips = function (target) {
    let num = 0,
        res = 0;
    for (let i = target.length - 1; i > 0; i--) {
        if (target[i] === '0' && target[i - 1] === '1') {
            num++;
        }
    }
    if (target[target.length - 1] === '1') {
        res = num * 2 + 1;
    } else {
        res = num * 2;
    }
    return res;
};

minFlips('001011101');
