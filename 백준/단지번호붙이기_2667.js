/**
 * @ 완료
 * @link https://www.acmicpc.net/problem/2667
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

const MAP_SIZE_INDEX = 0;
function solution(multiLineInput) {
  const mapSize = parseInt(multiLineInput[MAP_SIZE_INDEX]);
  const map = [];
  for (let i = 0; i < mapSize; i++) {
    const row = [];
    const line = multiLineInput[i + 1];
    for (let j = 0; j < line.length; j++) {
      row.push(Number(line[j]));
    }
    map.push(row);
  }
  const visited = Array.from(Array(mapSize), () => Array(mapSize).fill(false));

  // 탐색
  const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const answer = [];
  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < mapSize; j++) {
      if (map[i][j] !== 0 && visited[i][j] === false) {
        answer.push(bfs(i, j));
      }
    }
  }
  answer.sort((a, b) => a - b);
  console.log(answer.length);
  console.log(answer.join("\n"));

  return answer;
  function isInMap(row, col) {
    return row >= 0 && row < mapSize && col >= 0 && col < mapSize;
  }

  function bfs(row, col) {
    const queue = [[row, col]];
    visited[row][col] = true;
    let num = 1;
    for (let i = 0; i < queue.length; i++) {
      const [curRow, curCol] = queue[i];
      for (let i = 0; i < dir.length; i++) {
        const [movRow, movCol] = [curRow + dir[i][0], curCol + dir[i][1]];
        if (
          isInMap(movRow, movCol) &&
          map[movRow][movCol] === 1 &&
          visited[movRow][movCol] === false
        ) {
          queue.push([movRow, movCol]);
          visited[movRow][movCol] = true;
          num++;
        }
      }
    }
    return num;
  }
}

solution(multiLineInput);
