/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {};
    let balloonCount = 0;

    for (let char of text) {
        if (map[char]) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }
    }

    while (map['b'] > 0 && map['a'] > 0 && map['l'] > 1 && map['o'] > 1 & map['n'] > 0) {
        balloonCount++;
        map['b']--;
        map['a']--;
        map['l']-=2
        map['o']-=2
        map['n']--;
    }

    return balloonCount;
};

// Using ES6 map

var maxNumberOfBalloons = function(text) {
    const map = new Map();
    let balloonCount = 0;
    // map number of occurences for each character
    for (let char of text) {
        if (map.has(char)) {
            map.set(char, map.get(char)+1);
        } else {
            map.set(char, 1);
        }
    }

    while (map.get('b') > 0 && map.get('a') > 0 && map.get('l') > 1 && map.get('o') > 1 && map.get('n') > 0) {
        balloonCount++;
        map.set('b', map.get('b') - 1)
        map.set('a', map.get('a') - 1)
        map.set('l', map.get('l') - 2)
        map.set('o', map.get('o') - 2)
        map.set('n', map.get('n') - 1)
    }

    return balloonCount;
};
