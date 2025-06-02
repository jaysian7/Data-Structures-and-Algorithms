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
    let longestPath = 0;

    depth(root);

    return longestPath;

    function depth(node) {
        if (!node) return 0;
        // recursively find the longest path in
        // both left and right child
        const leftPath = depth(node.left);
        const rightPath = depth(node.right);

        // update the longestPath if leftPath plus rightPath is larger
        longestPath = Math.max(longestPath, leftPath + rightPath);

        // return the longest on between leftPath and rightPath
        // remember to add 1 for the path connecting the node and its parent
        return Math.max(leftPath, rightPath) + 1;
    }
};
