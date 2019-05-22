/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
let numberOfLines = function(widths, S) {
    let lines = 1, width = 0;
    for (let c of S) {
        let w = widths[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        width += w;
        if (width > 100) {
            lines++;
            width = w;
        }
    }

    return [lines, width];
};
numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'absds');