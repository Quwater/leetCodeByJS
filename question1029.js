/**
 * @param {number[][]} costs
 * @return {number}
 */
// To minimize the total cost, we should fly the person with
// the maximum saving to A, and with the minimum - to B.
let twoCitySchedCost = function(costs) {
    costs.sort((a, b) => {
        return a[0] - a[1] - (b[0] - b[1]);
    });
        
    let res = 0;
    for (let i = 0; i < costs.length; ++i) {
        if (i < costs.length / 2) {
            res += costs[i][0];
        } else {
            res += costs[i][1];
        }
    }
    return res;
};
twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]);