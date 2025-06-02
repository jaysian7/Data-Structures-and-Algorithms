/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k%=nums.length;
    for (let i = 0; i < k; i++) { // Up to K times
        nums.unshift(nums.pop()) //  Unshift will place elements in the front of the array.
								//  Pop will take elements from the back of the array.
    }
    return nums;
};
