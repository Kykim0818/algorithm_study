/**
 * @link https://www.acmicpc.net/problem/2178
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

const rowDir = [0, 0, -1, 1];
const colDir = [-1, 1, 0, 0];
const MAP_SIZE_INDEX = 0;
function solution(multiLineInput) {
  const [row, col] = multiLineInput[MAP_SIZE_INDEX].split(" ").map((val) =>
    parseInt(val)
  );
  const map = [];
  const moveMap = Array.from(Array(row), () => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    const lineString = multiLineInput[i + 1];
    const numbers = [];
    for (let j = 0; j < lineString.length; j++) {
      numbers.push(parseInt(lineString[j]));
    }
    map.push(numbers);
  }
  console.log(map);

  const [startRow, startCol] = [0, 0];
  const [goalRow, goalCol] = [row - 1, col - 1];

  const queue = [[startRow, startCol]];
  moveMap[startRow][startCol] = 1;
  for (let i = 0; i < queue.length; i++) {
    const [curRow, curCol] = queue[i];
    for (let dir = 0; dir < 4; dir++) {
      const [movRow, movCol] = [curRow + rowDir[dir], curCol + colDir[dir]];

      if (
        movRow >= 0 &&
        movRow < row &&
        movCol >= 0 &&
        movCol < col &&
        map[movRow][movCol] !== 0
      ) {
        if (
          moveMap[movRow][movCol] === 0 ||
          moveMap[movRow][movCol] > moveMap[curRow][curCol] + 1
        ) {
          queue.push([movRow, movCol]);
          moveMap[movRow][movCol] = moveMap[curRow][curCol] + 1;
        }
      }
    }
  }

  const answer = moveMap[row - 1][col - 1];
  // console.log("input", multiLineInput);
  // console.log("moveMap", moveMap);
  console.log(answer);
  return answer;
}

solution(multiLineInput);
