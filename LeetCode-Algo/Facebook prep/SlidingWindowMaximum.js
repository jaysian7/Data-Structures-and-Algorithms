/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
- Initialize a double-ended queue (deque) to store indices for finding the max/min
-- The dequeue is used to maintain a decreasing order of values' indices from the current sliding window
-- The front of the dequeue always contains the index of the maximum value
-- We remove indices from the front of the deque if they are out of the bounds of the current window
-- We also remove indices from the back of the deque if the corresponding values are smaller
   than the current element, ensuring the deque's front is always the current window's maximum
-- For each window, the maximum value (front of the deque) is added to the result array

- First window, process the first window of size 'k'
- Slide the window by adding next element and removing left-most element
- Continue until you reach end of array
*/

function maxSlidingWindow(nums, k) {
    let result = [];
    let deque = []; // Store indices

    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices whose corresponding values are less than nums[i]
        while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);

        // The front of the deque is the index of the maximum element of the window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
