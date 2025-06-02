/**
 * @param {number} size
 */
// var MovingAverage = function(size) {
//     this.size = size;
//     this.queue = [];
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// MovingAverage.prototype.next = function(val) {
//     this.queue.push(val);
//     let windowSum = 0;
//     for (let i=Math.max(0, this.queue.length - this.size); i<this.queue.length; i++) {
//         windowSum += this.queue[i];
//     }

//     return windowSum/Math.min(this.queue.length, this.size);
// };

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
    }

    next(val) {
        this.queue.push(val);
        let windowSum = 0;
        for (let i=Math.max(0, this.queue.length - this.size); i<this.queue.length; i++) {
            windowSum += this.queue[i];
        }

        return windowSum/Math.min(this.queue.length, this.size);
    }
}

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */