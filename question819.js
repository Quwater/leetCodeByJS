/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
let mostCommonWord = function(paragraph, banned) {
    // let arr = paragraph.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().split(' ');
    // if (arr.length === 1) {
    //     return arr[0];
    // }
    // let count = {};
    // for (let i of arr) {
    //     count[i] = count[i] + 1 || 1;
    // }
    
    // let numArr = [];
    // for (let i of Object.keys(count)) {
    //     // incase of 'a, b, c,c,c, d,d,d'
    //     if (!banned.includes(i) && i !== '') {
    //         numArr.push(count[i]);
    //     }
    // }
    
    // let value = numArr.sort((a, b) => b - a)[0];
    // for (let i of Object.keys(count)) {
    //     if (count[i] === value && !banned.includes(i)) {
    //         return i;
    //     }
    // }

    const words = paragraph.toLowerCase().split(/\W/);

    const mp = {};
   
    words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
    //Rather than deleting banned words, just set its value to a negative number
    //more fast
    banned.map(x => mp[x] = -1);

    return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
};
mostCommonWord();