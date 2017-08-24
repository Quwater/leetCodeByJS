/**
 * @name Detect Capital
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var arr = word.split('');
    var isUpperCase = function(c) {
        return c >= 'A' && c <= 'Z';
    };
    var isLowerCase = function(c) {
        return c >= 'a' && c <= 'z';
    };

    var numUpper = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isUpperCase(arr[i])) {
            numUpper++;
        }
    }
    // 首字母为大写，其余为小写
    if (numUpper === 1) {
        return isUpperCase(arr[0]);
    }
    // 全部为大写，或者全部为小写
    return numUpper == 0 || numUpper == arr.length;

    //逻辑太过繁琐，重复代码过多
    // var arr = word.split('');
    // var isCap = false;
    // var ch = function(c) {
    //     return c.charCodeAt();
    // };
    // if (arr.length === 1) {
    //         isCap = true;
    // }
    // if (ch(arr[0]) >= 65 && ch(arr[0]) <= 90) {
    //     for (var i = 1; i < arr.length; i++) {
    //         var code = ch(arr[i]);
    //         if (ch(arr[1]) >= 65 && ch(arr[1])<= 90) {
    //             if(code >= 65 && code <= 90) {
    //                 isCap = true;
    //             } else {
    //                 isCap = false;
    //                 return isCap;
    //             }
    //         } else if (ch(arr[1]) >= 97 && ch(arr[1])<= 122) {
    //             if(code >= 97 && code <= 122) {
    //                 isCap = true;
    //             } else {
    //                 isCap = false;
    //                 return isCap;
    //             }
    //         }
    //     }
    // } else {
    //     for (var i = 1; i < arr.length; i++) {
    //         var code = ch(arr[i]);
    //         if(code >= 97 && code <= 122) {
    //             isCap = true;
    //         } else {
    //             isCap = false;
    //             return isCap;
    //         }
    //     }
    // }
    // return isCap;
};
