/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let ans = 0, bal = 0;
    for (let i=0; i<s.length;i++) {
        bal += s[i] === '(' ? 1 : -1;

        if (bal === -1) {
            ans++;
            bal++;
        }
    }

    return ans + bal;
};