class RecentCounter {
    
    #requests: number[] = [];
    #max = 0;
    #min = 0;

    constructor() {
        this.#requests = [];
        this.#max = 0;
        this.#min = 0;
    }
    // 핑의 개수에 따라 On2 인데 아마 이걸 On 으로 줄여보는게 좋을듯?
    ping(t: number): number {
        this.#requests.push(t);
        this.#max = t;
        this.#min = Math.max(this.#min, t-3000);
        let requestCount = 0;
        for(let time of this.#requests){
            if(time >= this.#min && time <= this.#max) requestCount++;
        }
        return requestCount;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */