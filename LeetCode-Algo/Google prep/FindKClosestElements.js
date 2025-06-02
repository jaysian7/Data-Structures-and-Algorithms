/*
binary search is typically used to find if an element exists or where an element belongs in a sorted array. 
The beauty of algorithms lies in how abstract they are - with some clever thinking, we can apply binary search in a 
unique way to move our left and right pointers closer and closer to the left bound of our answer.

Let's consider two indices at each binary search operation, the usual mid, and some index mid + k. 
The relationship between these indices is significant because only one of them could possibly be in a final answer. 
For example, if mid = 2, and k = 3, then arr[2] and arr[5] could not possibly both be in the answer, 
since that would require taking 4 elements [arr[2], arr[3], arr[4], arr[5]].

This leads us to the question: how do we move our pointers left and right? If the element at arr[mid] is closer to x 
than arr[mid + k], then that means arr[mid + k], as well as every element to the right of it can never be in the answer. 
This means we should move our right pointer to avoid considering them. The logic is the same vice-versa - 
if arr[mid + k] is closer to x, then move the left pointer.
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let lo = 0, hi = arr.length - 1;
    while (lo < hi) {
        const mid = parseInt((lo + hi) / 2);
        x - arr[mid] > arr[mid + k]- x ? lo = mid + 1 : hi = mid;
    }
    return arr.slice(lo, lo + k);
};