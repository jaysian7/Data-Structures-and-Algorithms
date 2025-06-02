class HitCounter {
    constructor() {
      this.hitHash = [];
    }
  
    hit(timestamp) {
      if (!this.hitHash[timestamp]) {
        this.hitHash[timestamp] = 0;
      }
      return ++this.hitHash[timestamp];
    }
  
    getHits(timestamp, range = 300) {
      let count = 0;
      let lowerBound = timestamp > range ? timestamp - range : 0;
      while (timestamp > lowerBound) {
        this.hitHash[timestamp] && (count += this.hitHash[timestamp]);
        timestamp--;
      }
      return count;
    }
  }