/**
 * @name Most Visited Sector in a Circular Track
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
const mostVisited = function (n, rounds) {
    let arr = [];
    arr.push(rounds[0]);
    for (let i = 0; i < rounds.length - 1; i++) {
        if (rounds[i] < rounds[i + 1]) {
            for (let j = rounds[i] + 1; j <= rounds[i + 1]; j++) {
                arr.push(j);
            }
        } else if (rounds[i] > rounds[i + 1]) {
            for (let j = rounds[i] + 1; j <= n; j++) {
                arr.push(j);
            }
            for (let j = 1; j <= rounds[i + 1]; j++) {
                arr.push(j);
            }
        }
    }
    let map = {};
    for (let i of arr) {
        map[i] = map[i] + 1 || 1;
    }
    let max = Math.max(...Object.values(map));
    const res = [];
    for (let i in map) {
        if (map[i] === max) {
            res.push(i);
        }
    }
    return res;
};
