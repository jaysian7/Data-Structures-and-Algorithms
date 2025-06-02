function threeSum(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    const result = [];

    // Step 2: Iterate through the array, taking one element each time
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Step 3: Use two pointers to find pairs that sum up to the negative of nums[i]
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Step 4: Check if the sum is zero
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase the sum by moving the left pointer to the right
            } else {
                right--; // Decrease the sum by moving the right pointer to the left
            }
        }
    }

    return result;
}