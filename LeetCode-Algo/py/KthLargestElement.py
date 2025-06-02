class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Approach 1: Sort first then return kth element from the end
        # Time complexity: O(NlogN), Space Complexity: O(1)
        return sorted(nums)[len(nums)-k]

        # Approach 2: Use a heap. Initialize a heap "the smallest element first", and add all elements from the array into this heap one by one
        # Keeping the size of the heap always less or equal to k. That would results in a heap containing k largest elements of the array
        # The time complexity of adding an element in a heap of size k is O(logk) and we do it N times that means O(NlogK) time complexity
        # In python there is a method nlargest in the heapq library which has the same O(Nlogk) time complexity and reduces the code to one line
        # This algorithm improves time complexity, but one pays with O(k) space complexity
        return heapq.nlargest(k,nums)[-1] # same as return heapq.nlargest(k,nums)[k-1] , e.g. heapq.nlargest(k,nums) = [6, 5] when k = 2