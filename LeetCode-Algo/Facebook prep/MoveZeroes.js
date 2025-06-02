/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writer = 0;
    for (let reader = 0; reader < nums.length; reader++) {
        if (nums[reader] === 0) {
            continue;
        } else if (nums[reader] !== 0) {
            nums[writer] = nums[reader];
            writer++;
        }
    }
    
    while (writer < nums.length) {
        nums[writer] = 0;
        writer++;
    }
    
    return nums;
};