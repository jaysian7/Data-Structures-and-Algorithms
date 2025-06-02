/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function getMaxPathSum(root) {
        // Base case: if null, return 0
        if(!root) return 0;

        // Call getMaxPathSum recursively for the node children to compute
        // max sum of left and right sub-trees
        const leftPathSum = Math.max(getMaxPathSum(root.left), 0),
              rightPathSum = Math.max(getMaxPathSum(root.right), 0);
        // Update maxSum if it's better to start a new path
        maxSum = Math.max(maxSum, root.val + leftPathSum + rightPathSum);
        // For recursion: return the max gain if continue the same path
        return Math.max(root.val + leftPathSum, root.val + rightPathSum);
    }

    getMaxPathSum(root);
    return maxSum;
};
