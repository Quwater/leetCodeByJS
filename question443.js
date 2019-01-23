/**
 * @param {character[]} chars
 * @return {number}
 */
let compress = function(chars) {
    for (let i = chars.length - 1; i > 0; i--) {
        let count = 1;
        while (chars[i] === chars[i-1]) {
            count++;
            chars.splice(i-1, 1);
            i -= 1;
        }
        if (count > 1) {
            chars.splice(i+1, 0, ...count.toString().split(''));
        }
    }
};
compress(['a','a','b','b','c','c','c']);