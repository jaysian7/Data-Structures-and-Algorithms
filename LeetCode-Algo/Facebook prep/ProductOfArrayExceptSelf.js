/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Length of the input array
    const length = nums.length;
    
    // Final answer array to be returned
    let answer = [];
    
    // answer[i] contains the product of all elements to the left
    // Note: for the element at index '0', there are no elements to the left,
    // so then answer[0] would be 1
    answer[0] = 1;
    
    for (let i=1; i<length; i++) {
        // answer[i-1] already contains the product of elements to the left of 'i-1'
        // so simply multiplying it with nums[i-1] would give the product of all
        // elements to the left of index 'i'
        answer[i] = nums[i-1] * answer[i-1];
    }
    
    // R contains the product of all elements to the right
    // Note for the element at index 'length-1', there are no elements to the right
    // so the R would be 1
    let R = 1;
    for (let i=length-1;i>=0;i--) {
        // For the index 'i', R would contain the
        // product of all elements to the right. We update R accordingly
        answer[i] = answer[i] *R;
        R*= nums[i];
    }
    
    return answer;
};

/*
For every given index, iii, we will make use of the product of all the numbers to the left of it and multiply it by the 
product of all the numbers to the right. 
This will give us the product of all the numbers except the one at the given index i.
Initialize two empty arrays, L and R where for a given index i, L[i] would contain the product of all the numbers to the left of i 
and R[i] would contain the product of all the numbers to the right of i
*/

// var productExceptSelf = function(nums) {
//     const length = nums.length;

//     let L = [], R = [];
//     let answer = [];

//     L[0] = 1;
//     for (let i=1; i<length; i++) {
//         L[i] = nums[i-1] * L[i-1];
//     }

//     R[length-1] = 1;
//     for (let i=length-2; i>=0; i--) {
//         R[i] = nums[i+1] * R[i+1];
//     }

//     for (let i=0; i<length; i++) {
//         answer[i] = L[i] * R[i];
//     }

//     return answer;
// };