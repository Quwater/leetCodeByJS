/**
 * @param {string} S
 * @return {string}
 */
let reverseOnlyLetters = function(S) {
    // let str = '';
    // for (let i = 0; i < S.length; i++) {
    //     let ascii = S.charCodeAt(i);
    //     if (isLetter(ascii)) {
    //         str = str.concat(S[i]);
    //     }
    // }
    // for (let i = S.length - 1, j = 0; i >= 0; i--) {
    //     let ascii = S.charCodeAt(i);
    //     if (isLetter(ascii)) {
    //         S = S.slice(0, i).concat(str[j]).concat(S.slice(i+1));
    //         j++;
    //     }
    // }
    // return S;
    
    // cleaner code
    const isLetter = (c) => /[a-zA-Z]/.test(c);
    const chars = [...S].filter(c => isLetter(c));
	
    let ret = '', index = chars.length - 1;
	
    for (let c of S) {
        ret += isLetter(c) ? chars[index--]: c;
    }
    return ret;
};
// function isLetter(char) {
//     if (char >= 65 && char <= 90 || char >= 97 && char <= 122) {
//         return true;
//     }
// }
reverseOnlyLetters();