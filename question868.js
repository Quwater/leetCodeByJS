/**
 * @param {number} N
 * @return {number}
 */
let binaryGap = function(N) {
    // let str = N.toString(2);
    // let res = 0;
    // let temp = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === '1' && temp === 0) {
    //         temp++
    //     } else if (str[i] !== '1' && temp !== 0) {
    //         temp++;
    //     } else if (str[i] === '1' && temp !== 0) {
    //         if (temp >= res) {
    //             res = temp;
    //         }
    //         temp = 1;
    //     }
    // }
    // return res;

    // get if/else from loop seems more fast. 
    let binary = N.toString(2).split('');
    const gap = [];
    const dif = [];
    for(let i = 0; i < binary.length; i++){        
        if (binary[i] == 1 ) {
            gap.push(i);
        }
    }
    for(let i = 0; i < gap.length; i++){
        if(gap[i + 1]){
            dif.push(gap[i + 1] - gap[i]);
        }
        
    }
    if(dif.length < 1) return 0;
    return Math.max(...dif);
};
binaryGap();