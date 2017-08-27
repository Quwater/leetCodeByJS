/**
 * @name Teemo Attacking
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var time = 0;
    for (var i = 0; i < timeSeries.length-1; i++) {
        if (timeSeries[i+1] - timeSeries[i] >= duration) {
            time += duration;
        } else {
            time += timeSeries[i+1] - timeSeries[i];
        }
    }
    // 只要攻击过一次，最后一定会有一个完整的中毒时间
    if (timeSeries.length !== 0) {
        return time+=duration;
    } else {
        return 0;
    }
};
