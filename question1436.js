/**
 * @name Destination City
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
    let map = {},
        point = [];
    for (let path of paths) {
        map[path[0]] = map[path[0]] + 1 || 1;
        map[path[1]] = map[path[1]] + 1 || 1;
    }
    for (let i in map) {
        if (map[i] === 1) {
            point.push(i);
        }
    }
    for (let path of paths) {
        if (point.includes(path[1])) {
            return path[1];
        }
    }
};

destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
]);
