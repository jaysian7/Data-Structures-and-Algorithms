class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        curr_sum = max_sum = nums[0]

        for i in range(1, n):
            curr_sum = max(nums[i], curr_sum + nums[i])
            max_sum = max(max_sum, curr_sum)
            
        return max_sum

        #The algorithm is general and straightforward: iterate over the array and update at each step the standard set for such problems:
        # current element
        # current local maximum sum (at this given point)
        # global maximum sum seen so far.

        # Time Complexity: O(n) since it's one pass along the array
        # Space complexity: O(1) since it's constant space 