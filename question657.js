/**
 * @name 657-Judge Route Circle
 * @description Initially, there is a Robot at position (0, 0). Given a sequence
 * of its moves, judge if this robot makes a circle, which means it moves back
 * to the original place.The move sequence is represented by a string. And each
 * move is represent by a character. The valid robot moves are R (Right),
 * L (Left), U (Up) and D (down). The output should be true or false
 * representing whether the robot makes a circle.
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
