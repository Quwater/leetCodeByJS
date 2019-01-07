/**
 * @param {string} S
 * @return {number[][]}
 */
let largeGroupPositions = function(S) {
    let index = [0, 0];
    let result = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== S[i+1] || i === S.length-1) {
            index[1] = i;
            if (index[1] - index[0] >= 2) {
                result.push(index);
            }
            index = [i+1, i+1] 
        }
    }
    return result;
};