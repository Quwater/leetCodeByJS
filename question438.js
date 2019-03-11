/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = function (s, p) {
    // O(n2) 蛮力法

    // let res = [],
    //     map = {};
    // for (let i of p) {
    //     map[i] = map[i] + 1 || 1;
    // }
    // for (let i = 0; i < s.length - p.length + 1; i++) {
    //     let temp = s.substring(i, i+p.length),
    //         tempMap = {},
    //         equal = true;
    //     for (let j = 0; j < temp.length; j++) {
    //         tempMap[temp[j]] = tempMap[temp[j]] + 1 || 1;
    //     }
    //     for (let k in tempMap) {
    //         if (tempMap[k] !== map[k]){
    //             equal = false;
    //         }
    //     }
    //     if (equal) {
    //         res.push(i);
    //     }
    // }
    // return res;

    const map = new Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
        map[p[i].charCodeAt() - 97]++;
    }

    let j = 0;
    const res = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i].charCodeAt() - 97;
        map[c]--;
        while (map[c] < 0) {
            const c2 = s[j].charCodeAt() - 97;
            j += 1;
            map[c2]++;
        }
        if (i - j + 1 === p.length) {
            res.push(j);
        }
    }

    return res;
};
findAnagrams('abab', 'ab');