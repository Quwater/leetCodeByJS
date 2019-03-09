/**
 * @param {string[]} words
 * @return {string}
 */
// O(n2)
let longestWord = function (words) {
    let wordSet = new Set(words);
    let res = '';

    words.forEach(word => {
        let i = word.length - 1;

        if (word.length > res.length || (word.length === res.length && word < res)) {
            while (i > 0) {
                let c = word.substring(0, i);
                if (!wordSet.has(c)) break;
                i--;
            }

            if (i === 0) {
                res = word;
            }
        }
    });

    return res;
};
longestWord(['a', 'ab']);