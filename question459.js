/**
 * @name Repeated Substring Pattern
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var subs = '';
    for (var i = 1; i <= s.length/2; i++){
        if (s.length % i === 0){
            subs = s.substr(0,i);
            var news = '';
            // i的整倍数，全部加起来如果与 s 相同，便返回正确
            for (var j = 0; j < s.length / i; j++) {
                news += subs;
            }
            if (news === s) {
                return true;
            }
        }
    }
    return false;
};
