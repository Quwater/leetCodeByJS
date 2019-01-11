/**
 * @param {number[]} deck
 * @return {boolean}
 */
let hasGroupsSizeX = function(deck) {
    let obj = {};
    for (let i of deck) {
        obj[i] = obj[i] + 1 || 1;
    }
    let arr = Object.values(obj);
    let min = Math.min(...arr);
    for (let i of arr) {
        if (gcd(i, min) < 2) {
            return false;
        }
    }
    return true;
};

function gcd(a,b){
    if (b === 0){
        return a;
    }
    return gcd(b, a%b);
}

hasGroupsSizeX([1,2,3,4,4,3,2,1]);