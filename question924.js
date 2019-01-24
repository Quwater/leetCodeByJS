/**
 * @param {string} S
 * @return {number[]}
 */
let diStringMatch = function(S) {
    let N = S.length;
    let low = 0, high = N;
    let ans = [];
    // If we see an 'I', place the small element; otherwise place the large element.
    for (let i = 0; i < N; i++) {
        if (S.charAt(i) === 'I') {
            ans.push(low);
            low++;
        } else {
            ans.push(high);
            high--;
        }
    }
    ans[N] = low;
    return ans;
};
diStringMatch('DDD');