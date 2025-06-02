/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    let charPosition = new Map()
    for(let position = 0; position < order.length; position++){
        let char = order[position]
        charPosition.set(char, position)
    }
    for(let i = 1; i < words.length; i++){
        let prev = words[i-1], curr = words[i]
        if(charPosition.get(prev[0]) > charPosition.get(curr[0]))return false
        else if(prev[0] === curr[0]){
            let pointer = 1
            while(prev[pointer] === curr[pointer])pointer++
            if(curr[pointer] === undefined)return false
            if(charPosition.get(prev[pointer]) > charPosition.get(curr[pointer]))return false
        }
    }
    return true
};
