/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let count = 0;
    while (n !==0) {
      const exp = Math.floor(Math.log(n)/Math.log(2));
      n = Math.min(n - 2**exp, 2**(exp+1) - n);
      count++;
    }
    return count;
};
