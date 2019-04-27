/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let gameOfLife = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    const before = (row, col) => {
        if (row < 0 || row >= rows) return 0;
        if (col < 0 || col >= cols) return 0;
        return board[row][col] & 1;
    }
    const spawn = (row, col) => board[row][col] |= 2;
    const liveNeighbors = (row, col) => {
        return before(row-1, col-1)
            + before(row-1, col)
            + before(row-1, col+1)
            + before(row, col-1)
            + before(row, col+1)
            + before(row+1, col-1)
            + before(row+1, col)
            + before(row+1, col+1);
    };
    let life, neighbors;
    for (let row=0; row<rows; row++) {
        for (let col=0; col<cols; col++) {
            life = before(row, col);
            neighbors = liveNeighbors(row, col);
            if (!life && neighbors === 3) spawn(row, col);
            if (life && neighbors >=2 && neighbors <= 3) spawn(row, col);
        }
    }
    for (let row=0; row<rows; row++) {
        for (let col=0; col<cols; col++) {
            board[row][col] = board[row][col] >> 1;
        }
    }
};