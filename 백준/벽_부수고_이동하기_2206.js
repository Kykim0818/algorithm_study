/**
 *
 * @link https://www.acmicpc.net/problem/2206
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
const BLOCK = 1;
const CAN_GO = 0;
const NO_VISIT = Number.MAX_SAFE_INTEGER;
function solution(multiLineInput) {
  const [mapRow, mapCol] =
    multiLineInput[MAP_SIZE_INDEX].split(" ").map(Number);
  const map = [];
  for (let i = 0; i < mapRow; i++) {
    map.push(multiLineInput[i + 1].split("").map(Number));
  }
  const path = Array.from(Array(mapRow), () =>
    Array.from(Array(mapCol), () => Array(2).fill(NO_VISIT))
  );

  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const queue = [[0, 0, true]];
  path[0][0][0] = 1;
  for (let i = 0; i < queue.length; i++) {
    const [curRow, curCol, canPassBlock] = queue[i];
    for (let j = 0; j < dir.length; j++) {
      const [movRow, movCol] = [curRow + dir[j][0], curCol + dir[j][1]];
      //
      if (movRow >= 0 && movRow < mapRow && movCol >= 0 && movCol < mapCol) {
        if (map[movRow][movCol] === CAN_GO) {
          path[movRow][movCol][0] = path[curRow][curCol][0] + 1;
          queue.push([movRow, movCol, canPassBlock]);
        }
        if (map[movRow][movCol] === BLOCK) {
          if (canPassBlock) {
            path[movRow][movCol][1] = path[curRow][curCol][0] + 1;
            queue.push([movRow, movCol, false]);
          }
        }
      }
    }
  }

  console.log(path);

  let answer = "";
  console.log("input", multiLineInput);
  return answer;
}

solution(multiLineInput);
