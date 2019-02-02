/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
let isRectangleOverlap = function(rec1, rec2) {
    let noOverlap = rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[1] >= rec2[3] || rec1[3] <= rec2[1];
    return (!noOverlap);
};
isRectangleOverlap([0,0,1,1], [1,0,2,1]);