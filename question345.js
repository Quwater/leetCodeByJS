/**
 * @name Reverse Vowels of a String
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr = s.split('');
    var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var index = [];
    var a = [];
    // 找到所有元音的索引
    for (var i = 0; i < arr.length; i++) {
        if (vowel.indexOf(arr[i]) !== -1) {
            index.push(i);
        }
    }
    // 找到所有元音的顺序，并将其倒序输入数组 a
    for (var j = index.length-1; j >= 0; j--) {
        a.push(arr[index[j]]);

    }
    // 按照索引顺序重新赋值
    for (var k = 0; k < index.length; k++) {
        arr[index[k]] = a[k];
    }
    return arr.join('');
};
