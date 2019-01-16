/**
 * @param {string} S
 * @return {string}
 */
let toGoatLatin = function(S) {
    let arr = S.split(' ');
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let tail = 'a';
    for (let i = 0; i < arr.length; i++) {
        if (vowel.includes(arr[i][0])) {
            arr[i] = arr[i]+'ma';
        } else {
            arr[i] = arr[i].slice(1).concat(arr[i][0]);
            arr[i] = arr[i].concat('ma');
        }
        arr[i] = arr[i].concat(tail);
        tail = tail.concat('a');
    }
    return arr.join(' ');
};
toGoatLatin();