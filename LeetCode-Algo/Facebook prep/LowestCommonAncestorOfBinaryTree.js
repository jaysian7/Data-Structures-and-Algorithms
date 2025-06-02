/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
Approach: Traverse the tree in a depht first manner. The moment you encounter the nodes
p or q, return some boolean flag. The flag helps determine if we found the required nodes in any of the paths.
The least common ancestor would then be the node for which both the subtree recursions return a True flag.
It can also be the node which itself is one of p or q, and for which one of the subtree recursions returns a True flag.
*/

function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null, we have found the LCA
    // If only one of them is non-null, return the non-null value
    return left === null ? right : right === null ? left : root;
}