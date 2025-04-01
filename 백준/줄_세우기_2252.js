/**
 *  @
 *  @link https://www.acmicpc.net/problem/2252
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

const NODE_AND_VERTEX_INDEX = 0;
function solution(multiLineInput) {
  const [nodeCnt, vertexCnt] =
    multiLineInput[NODE_AND_VERTEX_INDEX].split(" ").map(Number);

  const vertexCntArr = Array(nodeCnt + 1).fill(0);
  const vertexMap = new Map();
  for (let i = 1; i <= nodeCnt; i++) {
    vertexMap.set(i, []);
  }

  vertexCntArr[0] = -1;

  for (let i = 0; i < vertexCnt; i++) {
    const [small, big] = multiLineInput[i + 1].split(" ").map(Number);
    vertexCntArr[big] = vertexCntArr[big] + 1;
    //
    const linkedNodeArr = vertexMap.get(small);
    linkedNodeArr.push(big);
    vertexMap.set(small, linkedNodeArr);
  }

  const answer = bfs();
  console.log(answer.join(" "));
  return answer;

  function bfs() {
    const answer = [];
    const queue = [];
    vertexCntArr.forEach((vertexCnt, nodeNum) => {
      if (nodeNum === 0) return;
      if (vertexCnt === 0) {
        queue.push(nodeNum);
        vertexCntArr[nodeNum] = -1;
      }
    });

    while (queue.length > 0) {
      const node = queue.shift();
      answer.push(node);

      const linkedNodeArr = vertexMap.get(node);
      linkedNodeArr.forEach((node) => {
        if (vertexCntArr[node] === -1) return;
        vertexCntArr[node]--;
        if (vertexCntArr[node] === 0) queue.push(node);
      });
    }
    return answer;
  }
}

solution(multiLineInput);
