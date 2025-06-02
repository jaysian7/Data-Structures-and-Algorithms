/**
 * @param {number[][]} isConnected
 * @return {number}
 */

/* Time Complexity: The DFS function visits each node once, which takes O(n) time. From each node, we iterate over all
possible edges using isConnected[node] which takes O(n) time for each visited node. As a result it takes
a total of O(n^2) time to visit all the nodes and iterate over its edges */  

var findCircleNum = function(isConnected) {
    // Implement DFS to visit every node the connected component belongs to
    // We can implement a set called 'seen' to keep track of which nodes were visited
    let dfs = node => {
        for (let neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                // if not yet seen, mark as visited
                seen[neighbor] = true;
                dfs(neighbor); // perform dfs on it's neighbors
            }
        }
    }

    // build the graph
    const n = isConnected.length
    const graph = new Map();
    for (let i=0;i<n;i++) {
        graph.set(i, []);
    } 

    // push connected cities
    for (let i=0;i<n;i++) {
        for (let j=i+1;j<n;j++) {
            if (isConnected[i][j]) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }

    let seen = new Array(n).fill(false);
    let ans = 0;

    for (let i=0;i<n;i++) {
        // if city and it's neighbors have not been visited
        // increment our answer and perform dfs to mark all of its neighbors as seen
        if (!seen[i]) {
            ans++;
            seen[i] = true;
            dfs(i);
        }
    }

    return ans;
};