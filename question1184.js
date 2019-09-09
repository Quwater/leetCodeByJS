/**
 * @name Distance Between Bus Stops
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
let distanceBetweenBusStops = function(distance, start, destination) {
    let distance1 = 0,
        distance2 = 0;
    for (let i = 0; i < distance.length; i++) {
        if (start < destination && i >= start && i < destination) {
            distance1 += distance[i];
        } else if (start > destination && (i >= start || i < destination)) {
            distance1 += distance[i];
        } else if (start === destination) {
            return 0;
        } else {
            distance2 += distance[i];
        }
    }
    return distance1 < distance2 ? distance1 : distance2;
};

distanceBetweenBusStops([1, 2, 3, 4], 0, 1);
