/**
 * @완
 * @link https://www.acmicpc.net/problem/11725
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

const NODE_COUNT_INDEX = 0;
function solution(multiLineInput) {
  const nodeCnt = parseInt(multiLineInput[NODE_COUNT_INDEX]);

  const graph = Array.from({ length: nodeCnt + 1 }, () => []);
  const parent = Array(nodeCnt + 1).fill(0);
  parent[1] = 1;

  for (let i = 0; i < nodeCnt - 1; i++) {
    const [first, second] = multiLineInput[i + 1].split(" ").map(Number);

    graph[first].push(second);
    graph[second].push(first);
  }
  const visited = Array(nodeCnt + 1).fill(false);
  const queue = [1];

  for (let i = 0; i < queue.length; i++) {
    const cur = queue[i];
    visited[cur] = true;

    for (let j = 0; j < graph[cur].length; j++) {
      const linkedNode = graph[cur][j];
      if (visited[linkedNode] === false) {
        queue.push(linkedNode);
        parent[linkedNode] = cur;
      }
    }
  }

  console.log(parent.slice(2).join("\n"));
  // console.log(answer.join("\n"));
  // return answer;
}

solution(multiLineInput);

// 7
// 1 6
// 6 3
// 3 5
// 4 1
// 2 4
// 4 7
