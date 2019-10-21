/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) {
        return true;
    }
    if (coordinates[0][1] - coordinates[1][1] === 0) {
        for (let i = 1; i < coordinates.length - 1; i++) {
            if (coordinates[i][1] - coordinates[i + 1][1] !== 0) {
                return false;
            }
        }
        return true;
    }
    let slope =
        (coordinates[0][0] - coordinates[1][0]) /
        (coordinates[0][1] - coordinates[1][1]);
    for (let i = 1; i < coordinates.length - 1; i++) {
        if (coordinates[i][1] - coordinates[i + 1][1] === 0) {
            return false;
        }
        if (
            (coordinates[i][0] - coordinates[i + 1][0]) /
                (coordinates[i][1] - coordinates[i + 1][1]) !==
            slope
        ) {
            return false;
        }
    }
    return true;
};
checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
