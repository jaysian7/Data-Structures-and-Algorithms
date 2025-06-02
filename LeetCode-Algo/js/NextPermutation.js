/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    let i = nums.length - 2;

    // Find the first decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        // Find the element greater than nums[i]
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the suffix
    reverse(nums, i + 1, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}


