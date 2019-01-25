/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function sortFunction(a, b) {
    return (a[0] < b[0]) ? -1 : 1;
}

let kClosest = function(points, K) {
    let pairs = [];
    for(let i=0; i < points.length; i++) {
        let key = Math.sqrt( (points[i][0] * points[i][0]) + (points[i][1] * points[i][1]) );
        pairs.push([key, points[i]]);
    }
    pairs.sort(sortFunction);
    let finalResults = [];
    for(let j =0; j < K; j++) {
        finalResults.push(pairs[j][1]);
    }
    return finalResults;
};

kClosest();
