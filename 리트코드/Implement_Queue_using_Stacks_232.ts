class MyQueue {
    queue : number[];
    constructor() {
        this.queue = [];        
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        const ret = this.queue.shift();
        if(ret){
            return ret;
        }
        throw Error();
    }

    peek(): number {
        const ret = this.queue[0];
        if(ret){
            return ret;
        }
        throw Error('queue is empty')
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */