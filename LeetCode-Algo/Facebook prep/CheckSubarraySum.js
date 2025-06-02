/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

 /*
To determine whether an array contains a good subarray, we can use a technique based on the prefix sum and modulo operation. The idea is to compute the cumulative sum of the elements and take the modulo k at each step. If at any point the same modulo value appears more than once, and the indices at which they appear are at least two elements apart, we have found a subarray sum that is a multiple of k.

If the the same keyValue (sum%k) is repeating then it means there are some values such that their sum is divisible by k. Only then we'll have the same keyValue.
So if the map already contains that value then we check if the (currIndex - map.get(sum) >1 ) , because we are given a size constraint.
If both of these two conditions are satisfied that means we've found one such sub array and we can return true.
 */
function checkSubarraySum(nums, k) {
    const prefixMod = new Map([[0, -1]]); // Initialize with modulo 0 at index -1
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (k != 0) sum %= k; // Modulo k to prevent large sums

        if (prefixMod.has(sum)) {
            if (i - prefixMod.get(sum) > 1) return true; // Found a subarray
        } else {
            prefixMod.set(sum, i);
        }
    }
  
    return false;
}
