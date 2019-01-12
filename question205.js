/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
    let obj = {};
    // one to one
    for(let i = 0; i < s.length; i++){
        if(!obj['s' + s[i]]) {
            obj['s' + s[i]] = t[i];
        }
        if(!obj['t' + t[i]]) {
            obj['t' + t[i]] = s[i];
        } 
        if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) {
            return false;
        } 
    }
    return true;
};
isIsomorphic('aab', 'ccd');