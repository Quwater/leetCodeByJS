/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = function(stones) {
    let len = stones.length;
    if(len === 1) {
        return stones;   
    }
    stones.sort((a,b) => a-b);
    let last = stones[len - 1];
    let secToLast = stones[len-2];
    return lastStoneWeight(stones.slice(0,stones.length-2).concat(last-secToLast));
};