/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
Use a hashmap to store the cumulative sum up to all the indices possible
along with the number of times the same sum occurs (key: sum, val: num of occurences)

Traverse over the array nums and keep on finding the cumulative sum. Every time we find a new sum,
make a new entry in the hashmap corresponding to that sum.
If the same sum occurs again, we increment the count corresponding to that sum in the hashmap.
Further, for every sum encountered, we also determine the number of times the sum 'sum-k' has occurred
already, since it will determine the number of times a subarray with sum k has occurred up to the
current index. We increment the count by the same amount.
*/
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count; 
};
