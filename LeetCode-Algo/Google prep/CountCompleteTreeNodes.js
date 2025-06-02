function countNodes(root) {
  // linear time, counts nodes recursively one by one
  return root != null ? countNodes(root.left) + countNodes(root.right) + 1 : 0;
}
