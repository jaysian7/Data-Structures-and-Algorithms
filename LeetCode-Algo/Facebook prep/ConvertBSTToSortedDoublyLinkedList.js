/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

 /*
To convert a Binary Search Tree (BST) to a sorted Circular Doubly-Linked List in place, we can use an in-order traversal. This traversal naturally accesses the nodes of the BST in sorted order. As we traverse, we'll link the nodes together as in a doubly-linked list.

Here's the process:

In-Order Traversal: Traverse the BST in an in-order fashion (left, root, right). This will access the nodes in ascending order.

Linking Nodes: As each node is visited, link it with the previously visited node (the predecessor). The first visited node will be the smallest and become the head of the linked list. The last visited node will be the largest.

Making it Circular: After the traversal, link the head and the last node to make the list circular.
 */
 
function treeToDoublyList(root) {
    if (!root) return null;
  
    let first = null;
    let last = null;
  
    function inOrder(node) {
      if (node) {
        // Traverse the left subtree
        inOrder(node.left);
  
        // Link the current node with the last node
        if (last) {
          last.right = node;
          node.left = last;
        } else {
          first = node;
        }
        last = node;
  
        // Traverse the right subtree
        inOrder(node.right);
      }
    }
  
    inOrder(root);
  
    // Close the Doubly-Linked list to make it circular
    last.right = first;
    first.left = last;
  
    return first;
  }
  