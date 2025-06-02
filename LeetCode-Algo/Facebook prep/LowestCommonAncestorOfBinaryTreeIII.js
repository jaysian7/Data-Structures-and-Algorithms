/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    const set = new Set();
    let queue = [p, q];

    while (queue.length) {
        const node = queue.shift();
        if (set.has(node.val)) return node;
        set.add(node.val);
        if (node.parent !== null) queue.push(node.parent);
    }
};