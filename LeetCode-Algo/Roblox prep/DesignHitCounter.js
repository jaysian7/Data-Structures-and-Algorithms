class HitCounter {
    constructor() {
        this.hits = []; // Store the timestamps of each hit
    }

    hit(timestamp) {
        this.hits.push(timestamp);
    }

    getHits(timestamp) {
        // Remove hits that occurred more than 5 minutes (300 seconds) ago
        while (this.hits.length > 0 && timestamp - this.hits[0] >= 300) {
            this.hits.shift(); // Remove the oldest hit
        }
        return this.hits.length; // Return the number of recent hits
    }
}