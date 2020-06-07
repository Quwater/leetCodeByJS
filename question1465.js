/**
 * @name Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = function (h, w, horizontalCuts, verticalCuts) {
    horizontalCuts = horizontalCuts.sort((a, b) => a - b);
    verticalCuts = verticalCuts.sort((a, b) => a - b);
    const newH = [0, ...horizontalCuts, h];
    const newW = [0, ...verticalCuts, w];
    let maxIntH = 0,
        maxIntW = 0;
    for (let i = 1; i < newH.length; i++) {
        if (maxIntH < newH[i] - newH[i - 1]) {
            maxIntH = newH[i] - newH[i - 1];
        }
    }
    for (let i = 1; i < newW.length; i++) {
        if (maxIntW < newW[i] - newW[i - 1]) {
            maxIntW = newW[i] - newW[i - 1];
        }
    }
    return (maxIntH * maxIntW) % 1000000007;
};

maxArea(5, 4, [3, 1], [1]);
