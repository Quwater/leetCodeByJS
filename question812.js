/**
 * @param {number[][]} points
 * @return {number}
 */
let largestTriangleArea = function(points) {
    let res = 0;
    for (let p1 of points)
        for (let p2 of points)
            for (let p3 of points)
                res = Math.max(res, help(p1, p2, p3));
    return res;
};

let help = function(p1, p2, p3) {
    return 0.5 * Math.abs(p1[0]*p2[1] + p2[0]*p3[1] + p3[0]*p1[1] - p2[0]*p1[1] - p3[0]*p2[1] - p1[0]*p3[1]);
};
largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]);