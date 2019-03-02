/**
 * @name Teemo Attacking
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
let findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) {
        return 0;
    }
    
    let time = 0;
    for (let i = 0; i < timeSeries.length-1; i++) {
        time += Math.min(timeSeries[i+1] - timeSeries[i], duration);
    }
    time += duration;
    return time;
};
findPoisonedDuration([1, 4], 2);
