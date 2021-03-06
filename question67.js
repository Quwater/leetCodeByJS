/**
 * @name Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    let res = '',
        ca = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        res = (sum % 2) + res;
        ca = Math.floor(sum / 2);
    }
    res = ca > 0 ? 1 + res : res;
    return res;

    // if(a.length === 0) return b;
    // if(b.length === 0) return a;
    // if(a.length > b.length) return addBinary(b,a);

    // var sb = [];
    // var carry = '0';

    // for(var i = 0; i < b.length; i++){
    //     // 判断超出 a 的长度，则判定它相应的字符为'0'
    //     var aChar = i < a.length ? a.charAt(a.length-1-i) : '0';
    //     var bChar = b.charAt(b.length-1-i);
    //     var curr;

    //     if(aChar != bChar){
    //         // 如果a, b 不相等，判定carry 是否等于1
    //         curr = carry == '1'? '0' :'1';
    //     } else {
    //         // 如果a, b 相等
    //         curr = carry;
    //         carry = aChar;
    //     }
    //     sb.unshift(curr);
    // }

    // if(carry == '1') {
    //     sb.unshift(carry);
    // }

    // return sb.join('');

    // 浮点数计算不精确
    // var num1 = parseInt(a, 2);
    // var num2 = parseInt(b, 2);
    // sum = num1 + num2;
    // return sum
    // return sum.toString(2);
};

addBinary('11', '1');
