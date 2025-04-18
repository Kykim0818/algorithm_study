/**
 * @완
 * @link https://www.acmicpc.net/problem/14940
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

// 각지점에서 목표지점까지 거리 구하기
// GOAL 이 START 임
const CANT_GO = 0;
const CAN_GO = 1;
const GOAL = 2;

const N_M_INDEX = 0;
function solution(multiLineInput) {
  const [n, m] = multiLineInput[N_M_INDEX].split(" ").map(Number);
  const map = [];
  for (let i = 0; i < n; i++) {
    map.push(multiLineInput[i + 1].split(" ").map(Number));
  }

  const tPoint = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === GOAL) {
        tPoint.push(i);
        tPoint.push(j);
        break;
      }
    }
    if (tPoint.length !== 0) break;
  }
  console.log(tPoint);

  const distance = Array.from(Array(n), () => new Array(m).fill(0));
  const dRow = [-1, 1, 0, 0];
  const dCol = [0, 0, 1, -1];

  const queue = [tPoint];
  for (let i = 0; i < queue.length; i++) {
    const [curRow, curCol] = queue[i];
    const curDist = distance[curRow][curCol];

    for (let dir = 0; dir < 4; dir++) {
      const movRow = curRow + dRow[dir];
      const movCol = curCol + dCol[dir];
      if (movRow >= 0 && movRow <= n - 1 && movCol >= 0 && movCol <= m - 1) {
        if (map[movRow][movCol] === CAN_GO && distance[movRow][movCol] === 0) {
          distance[movRow][movCol] = curDist + 1;
          queue.push([movRow, movCol]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (distance[i][j] === 0 && map[i][j] === CAN_GO) {
        distance[i][j] = -1;
      }
    }
  }

  const answer = distance.map((row) => row.join(" "));
  console.log(answer.join("\n"));
  // return answer;
}

solution(multiLineInput);
