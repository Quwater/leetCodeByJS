/**
 * @name Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    // let stack = [],
    //     map = {')': '(', '}': '{', ']': '['},
    //     top_element = '';
    // for (let i of s) {
    //     if (map[i]) {
    //         if (stack.length !== 0) {
    //             top_element = stack.pop();
    //         } else {
    //             top_element = '#';
    //         }
    //         if (map[i] !== top_element) {
    //             return false;
    //         }
    //     } else {
    //         stack.push(i);
    //     }
    // }
    // return (!stack.length);
    let key = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let open = [];
    for (let i = 0; i < s.length; i++) {
        if (key.hasOwnProperty(s[i])) {
            open.push(s[i]);
        } else {
            if (open.length === 0) {
                return false;
            }
            if (key[open.pop()] !== s[i]) {
                return false;
            }
        }
    }
    if (open.length > 0) {
        return false;
    }
    return true;
};
isValid('()');