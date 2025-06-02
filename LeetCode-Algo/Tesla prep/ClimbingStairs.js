/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }

    // One can reach i'th step in one of two ways:
    // Taking a single step from (i-1)th step
    // Taking a step of 2 from (1-2)th step
    // So the total number of ways to reach ith is equal to the sum of
    // ways reaching (i-1)th step and ways of reaching (i-2)th step
    // Let our dp array denote the number of ways to reach ith step

    let dp = [];
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
