/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
    const count = Math.ceil(B.length / A.length);
    // only one more time
    const repeatStr = A.repeat(count);
    if (repeatStr.includes(B)) {
        return count;
    } else if ((repeatStr + A).includes(B)) {
        return count + 1;
    } else {
        return -1;
    }
};
repeatedStringMatch();