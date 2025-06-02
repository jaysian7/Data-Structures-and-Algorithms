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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    dfs(root);
    return diameter;

    function dfs(node) {
        if (!node) return 0;
        // recursively find the longest path in
        // both left and right child
        const leftPath = dfs(node.left);
        const rightPath = dfs(node.right);

        // update the diameter if the left path plus right path is larger
        diameter = Math.max(diameter, leftPath + rightPath);

        // return the longest one between left path and right path
        // add 1 for the path connecting the node and its parent
        return Math.max(leftPath, rightPath) + 1
    }
};