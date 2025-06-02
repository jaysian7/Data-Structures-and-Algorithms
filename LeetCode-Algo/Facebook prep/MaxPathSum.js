var maxPathSum = function(root) {
    let maxSum = -Infinity;
    
    function getMaxPathSum(root) {
        if(!root) {
            return 0;
        }
        const leftPathSum = Math.max(getMaxPathSum(root.left), 0),
              rightPathSum = Math.max(getMaxPathSum(root.right), 0);

        maxSum = Math.max(maxSum, root.val + leftPathSum + rightPathSum);
        return Math.max(root.val + leftPathSum, root.val + rightPathSum);        
    }

    getMaxPathSum(root);
    return maxSum;
};