/**
 * @param {number[]} bits
 * @return {boolean}
 */
let isOneBitCharacter = function(bits) {
    if(bits.length == 1) {
        return true;
    }
    return bits.join("").replace(/(11|10)/g, "x").slice(-1) != "x";
};