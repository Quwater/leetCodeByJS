/**
 * @name 657-Judge Route Circle
 * @param {string} moves
 * @return {boolean}
 */

 var judgeCircle = function(moves) {
    var arr = moves.split('');
    var x = 0;
    var y = 0;
    for (var i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'U':
                y += 1;
                break;
            case 'R':
                x += 1;
                break;
            case 'D':
                y -= 1;
                break;
            case 'L':
                x -= 1;
                break;
        }
    }

    if (x === 0 && y === 0) {
        return true;
    } else {
        return false;
    }
};
