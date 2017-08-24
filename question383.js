/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var arr = [];
    arr.length = 26;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
    for (var j = 0; j < magazine.length; j++) {
        arr[magazine.charAt(j).charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (var k = 0; k < ransomNote.length; k++) {
        if(--arr[ransomNote.charAt(k).charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false;
        }
    }
    return true;

    // 复杂度过高，通不过时间检测
    // var ran = ransomNote.split('');
    // var mag = magazine.split('');
    // var count = 0;
    // for (var i = 0; i < ran.length; i++) {
    //     if (mag.indexOf(ran[i]) !== -1) {
    //         count++;
    //         mag.splice(mag.indexOf(ran[i]), 1);
    //     }
    // }
    // if (count === ran.length) {
    //     return true;
    // } else {
    //     return false;
    // }
};
