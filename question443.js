/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    for (let i = 0; i < chars.length - 1; i++) {
        let count = 1;
        while (chars[i] === chars[i+1]) {
            count++;
            chars.splice(i+1, 1);
            console.log(chars);
        }
        chars.splice(i+1, 0, count.toString());
    }
    console.log(chars);
};
compress(['a','a','b','b','c','c','c']);