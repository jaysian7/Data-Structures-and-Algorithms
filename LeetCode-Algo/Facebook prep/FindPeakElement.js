/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // Linear scan O(n)
    // for (let i=0;i<nums.length-1;i++) {
    //     if (nums[i] > nums[i+1]) {
    //         return i;
    //     }
    // }

    // return nums.length-1;

    // Binary search O(log(n))
    // [1, 2, 3, 1]
    let left = 0, right=nums.length-1;

    while (left<right) {
        let mid = Math.floor((left+right)/2);
        if (nums[mid] > nums[mid+1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};