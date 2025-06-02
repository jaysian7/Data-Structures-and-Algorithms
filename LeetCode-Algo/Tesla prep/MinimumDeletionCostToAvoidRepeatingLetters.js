/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let minCost = 0;
    for (let i=0; i<s.length-1; i++) {
      if (s[i] === s[i+1]) {
        minCost += Math.min(cost[i], cost[i+1]);
        cost[i+1] = Math.max(cost[i], cost[i+1]); // to avoid deleting the same value twice
      }
    }

    return minCost;
};
