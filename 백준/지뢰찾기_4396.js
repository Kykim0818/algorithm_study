/**
 *  @
 *  @link https://www.acmicpc.net/problem/4396
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

const BOARD_SIZE_INDEX = 0;
function solution(multiLineInput) {
  const boardSize = parseInt(multiLineInput[BOARD_SIZE_INDEX]);
  const board = [];
  for (let i = 0; i < boardSize; i++) {
    board.push(multiLineInput[i + 1].split(""));
  }
  const minePoints = [];
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === "*") minePoints.push([i, j]);
    }
  }

  const inputBoard = [];
  const resultBoard = [];
  for (let i = 0; i < boardSize; i++) {
    inputBoard.push(multiLineInput[i + 1 + boardSize].split(""));
    resultBoard.push(multiLineInput[i + 1 + boardSize].split(""));
  }

  const dir = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  let mineFlag = false;
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (inputBoard[i][j] === "x") {
        if (board[i][j] === "*") {
          mineFlag = true;
        } else {
          let mineCount = 0;
          for (let p = 0; p < dir.length; p++) {
            const [movRow, movCol] = [i + dir[p][0], j + dir[p][1]];
            if (
              movRow >= 0 &&
              movRow < boardSize &&
              movCol >= 0 &&
              movCol < boardSize
            ) {
              if (board[movRow][movCol] === "*") mineCount++;
            }
          }
          resultBoard[i][j] = mineCount;
        }
      }
    }
  }
  if (mineFlag) {
    minePoints.forEach(([row, col]) => (resultBoard[row][col] = "*"));
  }

  const answer = resultBoard.map((row) => row.join(""));
  console.log(answer.join("\n"));
  return answer;
}

solution(multiLineInput);
