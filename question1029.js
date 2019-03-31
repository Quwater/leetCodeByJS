/**
 * @param {number[]} A
 * @return {boolean[]}
 */
let prefixesDivBy5 = function(A) {
    let arr = [],
        res = [],
        temp = '';
    for (let i of A) {
        temp += i;
        arr.push(temp);
    }
    res = arr.map(divisibleByFive);
    return res;
};

let divisibleByFive = function(s) {
    let odd = 0, even = 0, oddChar = 1, evenChar = 1;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            odd += oddChar * parseInt(s[i]);
            oddChar = -oddChar;
        } else {
            even += evenChar * parseInt(s[i]);
            evenChar = -evenChar;
        }
    }
    let res = odd * 2 + even;
    return (res % 5 === 0) ? true : false;
};
prefixesDivBy5([0, 1, 1]);