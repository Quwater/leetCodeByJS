/**
 * @name Corporate Flight Bookings
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
let corpFlightBookings = function(bookings, n) {
    let res = new Array(n).fill(0);
    for (let i = 0; i < bookings.length; i++) {
        for (let j = bookings[i][0]; j <= bookings[i][1]; j++) {
            res[j - 1] += bookings[i][2];
        }
    }
    return res;
};
corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5);
