/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n)
    }
    if (n == 0) {
        return matrix;
    }
        
    let rowStart = 0,
        rowEnd = n-1,
        colStart = 0,
        colEnd = n-1,
        num = 1; 
    
    // 顺时针旋转
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i ++) {
            matrix[rowStart][i] = num++; 
        }
        rowStart ++;
            
        for (let i = rowStart; i <= rowEnd; i ++) {
            matrix[i][colEnd] = num++; 
        }
        colEnd --;
            
        for (let i = colEnd; i >= colStart; i --) {
            matrix[rowEnd][i] = num++; 
        }
        rowEnd --;
            
        for (let i = rowEnd; i >= rowStart; i --) {
            matrix[i][colStart] = num++; 
        }
        colStart ++;
    }
        
    return matrix;
};
generateMatrix(4);