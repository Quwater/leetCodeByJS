/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
// O(n)
let uncommonFromSentences = function(A, B) {
    // let aWords = A.split(' '),
    //     bWords = B.split(' ');
    // let res = [];
    // for (let i of aWords) {
    //     if (!bWords.includes(i) && aWords.indexOf(i) === aWords.lastIndexOf(i)) {
    //         res.push(i);
    //     }
    // }
    // for (let i of bWords) {
    //     if (!aWords.includes(i) && bWords.indexOf(i) === bWords.lastIndexOf(i)) {
    //         res.push(i);
    //     }
    // }
    // return res;
    let words = {};
    let res = [];
    (A + ' ' + B).split(' ').forEach(word => {
        words[word] = words[word] + 1 || 1;
    });
    for (let key in words) {
        if (words[key] === 1) {
            res.push(key);
        }
    }
    return res;
};
uncommonFromSentences('apple, apple', 'banana');