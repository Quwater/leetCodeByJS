/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
let findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let min = 0;
    let j = 0;

    for (let i = 0; i < houses.length; i++) {
        // left < right
        while (j < heaters.length - 1 && (Math.abs(heaters[j] - houses[i]) >= Math.abs(heaters[j + 1] - houses[i])))
            j++;
        min = Math.max(min, Math.abs(heaters[j] - houses[i]));
    }
    return min;
};
findRadius([1, 2, 3, 4], [1, 4]);