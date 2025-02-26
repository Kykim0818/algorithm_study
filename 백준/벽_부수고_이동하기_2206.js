/**
 * @완
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
  const NOT_USED = 0;
  const ALREADY_USED = 1;
  const queue = [[0, 0, NOT_USED]];
  path[0][0][NOT_USED] = 1;
  for (let i = 0; i < queue.length; i++) {
    const [curRow, curCol, canPassBlock] = queue[i];
    for (let j = 0; j < dir.length; j++) {
      const [movRow, movCol] = [curRow + dir[j][0], curCol + dir[j][1]];
      //
      if (movRow >= 0 && movRow < mapRow && movCol >= 0 && movCol < mapCol) {
        if (
          map[movRow][movCol] === CAN_GO &&
          path[movRow][movCol][canPassBlock] === NO_VISIT
        ) {
          if (canPassBlock === NOT_USED) {
            path[movRow][movCol][NOT_USED] = path[curRow][curCol][NOT_USED] + 1;
          } else {
            path[movRow][movCol][ALREADY_USED] =
              path[curRow][curCol][ALREADY_USED] + 1;
          }
          queue.push([movRow, movCol, canPassBlock]);
        }
        if (
          map[movRow][movCol] === BLOCK &&
          path[movRow][movCol][canPassBlock] === NO_VISIT
        ) {
          if (canPassBlock === NOT_USED) {
            path[movRow][movCol][ALREADY_USED] =
              path[curRow][curCol][NOT_USED] + 1;
            queue.push([movRow, movCol, 1]);
          }
        }
      }
    }
  }
  // console.log(path);
  const minGoal = Math.min(
    path[mapRow - 1][mapCol - 1][NOT_USED],
    path[mapRow - 1][mapCol - 1][ALREADY_USED]
  );
  const answer = minGoal == Number.MAX_SAFE_INTEGER ? -1 : minGoal;
  console.log(answer);
  return answer;
}

solution(multiLineInput);
