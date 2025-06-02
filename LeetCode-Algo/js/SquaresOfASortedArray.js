/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = [];
    let left = 0, right = nums.length - 1; // two pointers
    
    for (let i=nums.length-1; i>=0; i--) {
        let numToSquare; // our number that we will end up squaring
        // compare absolute value of val at start vs end
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            numToSquare = nums[left];
            left++;
        } else {
            numToSquare = nums[right];
            right--;
        }
        result[i] = numToSquare * numToSquare;
    }
    
    return result;   
};