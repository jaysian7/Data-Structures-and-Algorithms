/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firstOccurrence = findBound(nums, target, true);
    if (firstOccurrence == -1) return [-1, -1];
    let lastOccurrence = findBound(nums, target, false); 
    return [firstOccurrence, lastOccurrence];
};

function findBound(nums, target, isFirst) {
    let start = 0, end = nums.length - 1;
    
    while (start<=end) {
        let mid = Math.floor((start+end)/2)
        if (nums[mid] == target) {
            if (isFirst) {
                // This means we found our lower bound
                if (mid == start || nums[mid-1] != target) {
                    return mid;
                }
                // Search on the left side for the bound
                end = mid - 1;
            } else {
                // This means we found our upper bound
                if (mid == end || nums[mid+1] != target) {
                    return mid;
                }
                
                // Search on the right side for the bound.
                start = mid + 1;
            }  
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return -1;
}