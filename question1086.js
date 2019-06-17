/**
 * @name High Five
 * @param {number[][]} items
 * @return {number[][]}
 */
let highFive = function(items) {
    let arrId = [],
        res = [];
    for (let i of items) {
        if (! arrId.includes(i[0])) {
            arrId.push(i[0]);
        }
    }
    let score = [];
    for (let i = 0; i < arrId.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (items[j][0] === arrId[i]) {
                score.push(items[j][1]);
            }
        }
        score.sort((a, b) => b - a);
        let sum = 0;
        for (let k = 0; k < 5; k++) {
            sum += score[k];
        }
        res.push([arrId[i], Math.floor(sum / 5)]);
        score = [];
    }
    return res;
};
highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]);