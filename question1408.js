/**
 * @name String Matching in an Array
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function (words) {
    let res = [];
    words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].indexOf(words[i]) !== -1) {
                res.push(words[i]);
                break;
            }
        }
    }
    return res;
};

stringMatching(['mass', 'as', 'hero', 'superhero']);
