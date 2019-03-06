/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// O(n)
// n = the total content of words
let isAlienSorted = function (words, order) {
    let smaller = function (a, b) {
        let len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            let aNum = order.indexOf(a[i]),
                bNum = order.indexOf(b[i]);
            if (a[i] !== b[i]) {
                if (aNum > bNum) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    };
    for (let i = 0; i < words.length - 1; i++) {
        if (!smaller(words[i], words[i + 1])) {
            return false;
        }
    }
    return true;
};
isAlienSorted();