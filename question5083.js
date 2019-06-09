/**
 * @name Occurrences After Bigram
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
let findOcurrences = function(text, first, second) {
    text = text.split(' ');
    let arr = [],
        res = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === first) {
            arr.push(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (text[arr[i]+1] && text[arr[i]+1] === second && text[arr[i]+2]) {
            res.push(text[arr[i]+2]);
        }
    }
    return res;
};
findOcurrences('alice is a good girl she is a good student', 'a', 'good');