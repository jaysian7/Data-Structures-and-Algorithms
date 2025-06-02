/*
For every given index, iii, we will make use of the product of all the numbers to the left of it and multiply it by the 
product of all the numbers to the right. 
This will give us the product of all the numbers except the one at the given index i.
Initialize two empty arrays, L and R where for a given index i, L[i] would contain the product of all the numbers to the left of i 
and R[i] would contain the product of all the numbers to the right of i
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;

    let L = [], R = [];
    let answer = [];

    L[0] = 1;
    for (let i=1; i<length; i++) {
        L[i] = nums[i-1] * L[i-1];
    }

    R[length-1] = 1;
    for (let i=length-2; i>=0; i--) {
        R[i] = nums[i+1] * R[i+1];
    }

    for (let i=0; i<length; i++) {
        answer[i] = L[i] * R[i];
    }

    return answer;
};
