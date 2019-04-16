/**
 * @param {string} S
 * @return {number}
 */
let minFlipsMonoIncr = function(S) {
    let N = S.length;
    let P = new Array(N + 1).fill(0);
    for (let i = 0; i < N; ++i)
        P[i+1] = P[i] + (S.charAt(i) == '1' ? 1 : 0);
    let ans = Number.MAX_SAFE_INTEGER;
    // P[j], 1 to 0
    // N-j-(P[N]-P[j], 0 to 1
    for (let j = 0; j <= N; ++j) {
        ans = Math.min(ans, P[j] + N-j-(P[N]-P[j]));
    }

    return ans;
};
minFlipsMonoIncr('00110');