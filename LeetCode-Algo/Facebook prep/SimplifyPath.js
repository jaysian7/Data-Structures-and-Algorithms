/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // create an array of parts split by slash
    const parts = path.split('/');
    let stack = [];
    
    for (let part of parts) {
        if (part === '..') {
            if (stack.length) {
                stack.pop();
            } 
        } else if (part && part !== '.') {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
};