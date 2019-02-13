/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// O(n)
let backspaceCompare = function(S, T) {
    if (build(S).join('') === build(T).join('')) {
        return true;
    } else {
        return false;
    }
};

let build = function(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            arr.push(s[i]);
        } else {
            arr.pop();
        }
    }
    return arr;
};
backspaceCompare('ab#c', 'ad#c');