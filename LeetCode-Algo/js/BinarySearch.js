/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    
    while (left <= right) {
        const mid = Math.floor((left+right)/2); 
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            // then target exists on the right side
            left = mid+1;
        } else if (nums[mid] > target) {
            // then target exists on the left side
            right = mid-1;
        }
    }
    
    return -1;
};