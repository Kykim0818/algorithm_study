const fs = require("fs");

/**
 * a b
 */
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

/**
 * a
 * b
 */
let multiLineInput = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;

    return newNode;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getHead() {
    return this.head.value;
  }

  getSize() {
    return this.size;
  }
}

function solution(input) {
  let answer = "";
  const cardCount = parseInt(input);
  const cards = new LinkedList();
  for (let i = 1; i <= cardCount; i++) {
    cards.push(i);
  }
  // console.log("cards", cards);
  while (cards.getSize() > 1) {
    cards.shift();
    cards.push(cards.getHead());
    cards.shift();
  }
  console.log(cards.getHead());
  return answer;
}

solution(input);
