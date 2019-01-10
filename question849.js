/**
 * @param {number[]} seats
 * @return {number}
 */
let maxDistToClosest = function(seats) {
    if (seats.length === 1) return 0;
    let maxDistance = 0;
    let lastSeated = -1;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1 && lastSeated === -1) {
            lastSeated = i;
            maxDistance = lastSeated - 0;    //[0, 0, 0, 1, ....]
        } else if (seats[i] === 1 && lastSeated !== -1) {
            maxDistance = Math.max(maxDistance, Math.floor((i - lastSeated) / 2));
            lastSeated = i;
        }
    }
    return Math.max(maxDistance, seats.length - 1 - lastSeated ); //[..., 1, 0, 0, ...]
};
maxDistToClosest([1,0,0,0,1,0,1]);

