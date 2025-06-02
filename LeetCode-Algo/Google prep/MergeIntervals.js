/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (!intervals.length) return intervals;
    intervals.sort((a,b) => a[0] - b[0]); //sort intervals by their starting position
    let prev = intervals[0]; //set previous to first interval
    let res = [prev]; //set current result to first interval, and update as we find overlaps
    for (let curr of intervals) {
        const start = 0, end = 1;
        if (curr[start] <= prev[end]) {
            prev[end] = Math.max(prev[end], curr[end]);
        } else {
            res.push(curr);
            prev = curr;
        }
    }

    return res;
}
