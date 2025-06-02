class CountIntervals {
    constructor() {
        this.intervals = [];
    }
    add(left, right) {
        this.intervals.push([left, right])
    }
    count() {
        // declare variable to store our counter
        let counter = 0;
        // let's merge the intervals first by overlapping intervals
        let intervals = this.intervals;
        intervals.sort((a,b) => a[0] - b[0]);
        let prev = intervals[0];
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

        for (let curr of res) {
            const start = 0, end = 1;
            let sum = curr[end] - curr[start] + 1;
            counter += sum;
        }

        return counter;
    }
}

/** 
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */