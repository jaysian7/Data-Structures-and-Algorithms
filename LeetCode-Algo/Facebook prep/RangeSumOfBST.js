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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let ans = 0;
    dfs(root, low, high);
    return ans;

    function dfs(node, low, high) {
        if (node !== null) {
            if (low <= node.val && node.val <= high) {
                ans += node.val;
            } if (low < node.val) {
                dfs(node.left, low, high);
            } if (node.val < high) {
                dfs(node.right, low, high);
            }
        }
    }
};

// Time Complexity: O(N), where N is the number of nodes in the tree
// Space Complexity: O(N) since we are performing a DFS traversal, the recursive
// solution requires additional space to maintain the function call stack

