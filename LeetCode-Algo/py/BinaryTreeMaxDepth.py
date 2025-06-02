class Solution:
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """ 
        if root is None: 
            return 0 
        else: 
            left_height = self.maxDepth(root.left) 
            right_height = self.maxDepth(root.right) 
            return max(left_height, right_height) + 1 

            # Using Recursion and DFS
            # Time Complexity: We visit each node exactly one, thus the time complexity is O(N) (N = number of nodes)
            # Space Complexity: In the worst case, the tree is completely unbalanced, e.g. each node has only left child node,
            # The recursion call would occur N times (the height of the tree), therefore the storage to keep the call stack would be
            # O(n). But in the best case (the tree is completely balanced), the height of the tree would be log(N). Therefore the space complexity
            # In this case would be O(log(N))