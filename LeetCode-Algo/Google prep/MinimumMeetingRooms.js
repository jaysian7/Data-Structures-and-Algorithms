/*
1.Sort the given meetings by their start time.
2.Initialize a new min-heap and add the first meeting's ending time to the heap. We simply need to keep track of the ending times as that tells us 
when a meeting room will get free.
3.For every meeting room check if the minimum element of the heap i.e. the room at the top of the heap is free or not.
4.If the room is free, then we extract the topmost element and add it back with the ending time of the current meeting we are processing.
5.If not, then we allocate a new room and add it to the heap.
6.After processing all the meetings, the size of the heap will tell us the number of rooms allocated. This will be the minimum number of rooms needed to 
accommodate all the meetings.
*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let ans = 0;

    // queue of meetings in progress
    let m = [];
    
    // sort by start time
    intervals = intervals.sort(([a],[b]) => a - b);
    
    for(let i = 0; i < intervals.length; i++) {
        const next = intervals[i];
        // look for meetings which have ended and remove minimum end time from queue
        // since start time is greater than the minimum end time, this means a meeting that
        // started earlier has ended now, and we can remove that from the queue
        while(m.length && m[0] <= next[0]) m.shift();
        m.push(next[1]);
        // sort queue by end time
        m = m.sort((a,b) => a - b);
        // if current number of meetings in progress is higher than max, update max
        ans = Math.max(ans, m.length);
    }
    
    return ans; 
};