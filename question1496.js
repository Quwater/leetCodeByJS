/**
 * @name Path Crossing
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function (path) {
    let origin = [0, 0];
    let map = new Map();
    map.set(origin.join(''), 1);
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') origin = [origin[0], origin[1] + 1];
        if (path[i] === 'S') origin = [origin[0], origin[1] - 1];
        if (path[i] === 'E') origin = [origin[0] + 1, origin[1]];
        if (path[i] === 'W') origin = [origin[0] - 1, origin[1]];
        let str = origin.join('');
        if (map.has(str)) {
            return true;
        } else {
            map.set(str, 1);
        }
    }
    return false;
};

isPathCrossing('NES');
