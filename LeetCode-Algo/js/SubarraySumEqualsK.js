var subarraySumHashMap = function(nums, k) {
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
}


// The idea
// Something to understand first is, when Sum_i = #0 + #1 + #2 .... + #i = 6, and Sum_k #0 + #1 + #2 ... + #k = 10, its pretty obvious that between #i to #k is equal to 4, and we can write that mathmatically to Sum_k - Sum_i = Sumi_to_k
// So In order to find k we are basically trying to find a pair of Sum_i and Sum_k such that Sum_k - Sum_i = k. Since we are only iterating the array once and calculating the sum from left to right accumatively, we can keep a record of all the sums up to index i, that is Sum0, Sum1...Sumi. For each new sum, we can check if there is a previous Sum such that Sum_current - Sum_prev = k. In order to find what is the "old_index", we can just change the formula to Sum_curren - k = Sum_old and look up from our record to see if we find a matching pair. If we did, bingo, that means we found a valid subarray.
