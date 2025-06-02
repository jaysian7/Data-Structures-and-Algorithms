/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Use a hash map to check while we're iterating through
    // Elements in our nums array if current element's complement exists
    // nums[i] + complement = target
    const map = new Map();
    for (let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return null;
};