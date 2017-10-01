/**
 * @name Pascal's Triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i=0; i<numRows; i++){
        result[i] = [];
    }
    for(let i=0; i<numRows; i++){
        result[i][0] = result[i][i] = 1;
    }
    // 帕斯卡三角元素的值为上面两个数之和
    for(let i=2; i<numRows; i++){
        for(var j=1; j<i; j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    return result;
};
