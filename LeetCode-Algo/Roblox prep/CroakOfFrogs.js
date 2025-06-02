/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    // keep track of count of 'croak'
    let c = 0, r = 0, o = 0, a = 0, k = 0;

    // handle characters that are not in sequence return -1
    for (let char of croakOfFrogs) {
        if (char === 'c') {
            c++;
        } else if (char === 'r') {
            r++;
        } else if (char === 'o') {
            o++;
        } else if (char === 'a') {
            a++;
        } else if (char === 'k') {
            k++;
        } else {
            return -1;
        }

    }

    if (c !== r || r!== o || o!== a || a!== k) {
        return -1;
    }
    // create counter to keep track of temporary and max occurence of C in sequence
    let tempC = 0, maxC = 0;
    for (let croakOfFrog of croakOfFrogs) {
        if (croakOfFrog === 'c') {
            tempC++;
            maxC = Math.max(tempC, maxC);
        }
        if (croakOfFrog === 'k') {
            tempC--;
        }
    }

    return maxC;

};