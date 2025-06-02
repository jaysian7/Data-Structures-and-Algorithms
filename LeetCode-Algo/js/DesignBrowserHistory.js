class BrowserHistory {
    constructor(homepage) {
        // create an array to store our visited URLS
        this.visitedURLS = [homepage];
        // create two pointers to store the indexes of current and last URLs
        this.currURL = 0;
        this.lastURL = 0;
    }
    visit(url) {
        // we've visited a new url, increment current URL index by 1
        this.currURL++;
        // check if there is space available at currURL index
        if (this.visitedURLS.length > this.currURL) {
            // we have enough space in our array to overwrite an old url entry
            // with a new one
            this.visitedURLS[this.currURL] = url;
        } else {
            this.visitedURLS.push(url);
        }
        // set last url equal to current url since this will be our last url if we go forward
        this.lastURL = this.currURL;
    }
    back(steps) {
        // move our current url pointer in the left direction by # of steps
        // we also need to handle overflow
        this.currURL = Math.max(0, this.currURL - steps);
        return this.visitedURLS[this.currURL];
    }
    forward(steps) {
        // move our current url pointer in the right direction by # of steps
        // we also need to handle overflow, we can't exceed last urls index
        this.currURL = Math.min(this.lastURL, this.currURL + steps);
        return this.visitedURLS[this.currURL];
    }
}