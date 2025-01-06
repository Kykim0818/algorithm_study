// js not ts
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back++] = value;
  }

  pop() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// usage
const queue = new Queue();
queue.push(1);
// queue.pop(2);

console.log(queue);
// Linked List로 구현
