/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToMakeFair(nums) {
    let evenPrefixSum = [0];
    let oddPrefixSum = [0];
    let count = 0;

    // Step 1: Calculate prefix sums for even and odd indices
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenPrefixSum.push(evenPrefixSum[evenPrefixSum.length - 1] + nums[i]);
            oddPrefixSum.push(oddPrefixSum[oddPrefixSum.length - 1]);
        } else {
            oddPrefixSum.push(oddPrefixSum[oddPrefixSum.length - 1] + nums[i]);
            evenPrefixSum.push(evenPrefixSum[evenPrefixSum.length - 1]);
        }
    }

    // Step 2 & 3: Check fairness after removing each element
    for (let i = 0; i < nums.length; i++) {
        let evenSum = evenPrefixSum[i] + (oddPrefixSum[oddPrefixSum.length - 1] - oddPrefixSum[i + 1]);
        let oddSum = oddPrefixSum[i] + (evenPrefixSum[evenPrefixSum.length - 1] - evenPrefixSum[i + 1]);

        if (evenSum === oddSum) {
            count++;
        }
    }

    return count;
}
