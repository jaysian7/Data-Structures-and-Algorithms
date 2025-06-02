/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // edge case, nothing inside intervals
    if (!intervals.length) {
        return false;
    }
    // sort intervals in ascending order
    intervals.sort((a,b) => a[0] - b[0]);
    const start = 0, end = 1;
    // we want to compare previous interval to current interval we're evaluating
    let prev = intervals[0];
    // have an answer array store our first interval, and update as we find overlaps
    let ans = [prev];
    for (let curr of intervals) {
        // if current intervals start is <= previous intervals end then we have an overlap
        if (curr[start] <= prev[end]) {
            // set previous intervals end to max between curr and prev
            prev[end] = Math.max(prev[end], curr[end]);
        } else {
            ans.push(curr);
            prev = curr;
        }
    }

    return ans;
};