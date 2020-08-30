/**
 * @name Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    // var list = [];
    // var arr = s.split(' ');
    // // arr数组内部的字符串元素是没有变的，所以需要用list来存储结果
    // for (var i = 0; i < arr.length; i++) {
    //     list.push(arr[i].split('').reverse().join(''));
    // }
    // return list.join(' ');
    return s.split('').reverse().join('').split(' ').reverse().join(' ');
};
