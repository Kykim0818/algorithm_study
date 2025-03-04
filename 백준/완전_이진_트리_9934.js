/**
 * @완
 * @link https://www.acmicpc.net/problem/9934
 */
const fs = require("fs");

/**
 * a
 * b
 */
let multiLineInput = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

const DEPTH_INDEX = 0;
function solution(multiLineInput) {
  const depth = parseInt(multiLineInput[DEPTH_INDEX]);
  const orders = multiLineInput[DEPTH_INDEX + 1].split(" ").map(Number);
  const answer = bfs();
  console.log(answer.map((answer) => answer.join(" ")).join("\n"));
  return answer;

  function bfs() {
    const answers = Array.from(Array(depth), () => []);
    const queue = [[0, orders.length - 1, 0]];
    for (let i = 0; i < queue.length; i++) {
      const [start, end, level] = queue[i];
      if (start === end) {
        answers[level].push(orders[start]);
      } else {
        const mid = (start + end) / 2;
        answers[level].push(orders[mid]);
        queue.push([start, mid - 1, level + 1]);
        queue.push([mid + 1, end, level + 1]);
      }
    }
    return answers;
  }
}

solution(multiLineInput);

// input이 방문순서고
// 방문순서로 트리를 그려라

// 3
// 1 6 4 3 5 2 7

// 3
// 6 2
// 1 4 5 7
