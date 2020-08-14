/**
 * @name Find Kth Bit in Nth Binary String
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
const findKthBit = function (n, k) {
    let count = 0;
    while (k !== 1) {
        let i = 0;
        while (Math.pow(2, i) < k) {
            i++;
            if (Math.pow(2, i) === k) {
                if (count % 2 === 0) {
                    return '1';
                } else {
                    return '0';
                }
            }
        }
        k = Math.pow(2, i) - k;
        count++;
    }
    if (count % 2 === 0) {
        return '0';
    } else {
        return '1';
    }
};
findKthBit();
