/**
 * @param {number[]} candies
 * @return {number}
 */
// O(n)

let distributeCandies = function(candies) {
    let kinds = [...new Set(candies)];
    if (kinds.length > candies.length / 2) {
        return candies.length / 2;
    } else {
        return kinds.length;
    }
};
distributeCandies([1,1,2,2,3,3]);