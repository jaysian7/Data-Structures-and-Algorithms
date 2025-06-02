/**
 * @param {number} n
 * @return {number[][]}
 */
function getFactors(n) {
    return factor(n, 2);
}

function factor(n, start) {
    if (n <= 0 || start <= 0) return [];

    let ret = [];

    // The max divisor is the sqrt. after that the rest are just duplicates in reverse
    // e.g 8 = 2*4 or 4*2, we only want to find 2*4
    const maxDivisor = Math.floor(Math.sqrt(n));

    // start is the starting divisor to try
    for (let i = start; i <= maxDivisor; i++) {
        if (n % i === 0) { // found a divisor
            let remain = Math.floor(n / i);

            // we have one possible factoring, add to list
            ret.push([i, remain]);

            // get possible factorings of remain, with all divisors starting from i
            let rest = factor(remain, i);

            // if we found any, then add them to result
            // rest is an array of arrays
            rest.forEach(e => ret.push([i, ...e]));
        }
    }
    return ret;
};