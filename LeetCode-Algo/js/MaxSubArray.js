/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = 0;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        curr = Math.max(curr + nums[i], nums[i]);
        max = Math.max(max, curr);
    }
    return max;
};