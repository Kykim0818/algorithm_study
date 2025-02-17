/**
 *  @link https://www.acmicpc.net/problem/2615
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

const MAX_LINE_COUNT = 19;
const NO_STONE = 0;
function solution(multiLineInput) {
  const dirRow = [0, 1, 1, 1];
  const dirCol = [1, 1, 0, -1];
  const board = [];
  for (let i = 0; i < MAX_LINE_COUNT; i++) {
    board.push(multiLineInput[i].split(" ").map(Number));
  }
  // const visited = Array.from({ length: MAX_LINE_COUNT }, () =>
  //   new Array(MAX_LINE_COUNT).fill(false)
  // );
  let answer = 0;
  let answersPoint = [];
  let isFindWinner = false;
  let startPoint = [];
  for (let i = 0; i < MAX_LINE_COUNT; i++) {
    if (isFindWinner) break;
    for (let j = 0; j < MAX_LINE_COUNT; j++) {
      if (isFindWinner) break;
      if (board[i][j] !== NO_STONE) {
        //
        const stoneColor = board[i][j];
        //
        for (dir = 0; dir < 4; dir++) {
          if (isFindWinner) break;
          const [movRow, movCol] = [i + dirRow[dir], j + dirCol[dir]];
          const [prevRow, prevCol] = [
            i + -1 * dirRow[dir],
            j + -1 * dirCol[dir],
          ];
          if (
            isInBoard(movRow, movCol) &&
            board[movRow][movCol] === stoneColor &&
            (!isInBoard(prevRow, prevCol) ||
              board[prevRow][prevCol] !== stoneColor)
          ) {
            startPoint = [i + 1, j + 1];
            checkWin(movRow, movCol, stoneColor, 2, dir);
          }
        }
      }
    }
  }
  console.log(answer);
  if (answer !== 0) {
    console.log(`${answersPoint[0] + 1} ${answersPoint[1] + 1}`);
  }
  return answer;

  function checkWin(row, col, stoneColor, count, dir) {
    const [movRow, movCol] = [row + dirRow[dir], col + dirCol[dir]];
    if (count === 5) {
      // 6목 체크
      if (!isInBoard(movRow, movCol) || board[movRow][movCol] !== stoneColor) {
        isFindWinner = true;
        answer = stoneColor;
        answersPoint = getAnswerPoint(row, col, dir);
        return;
      }
      return;
    }

    if (count < 5) {
      if (isInBoard(movRow, movCol) && board[movRow][movCol] === stoneColor) {
        checkWin(movRow, movCol, stoneColor, count + 1, dir);
      }
    }
    return;
  }
  function isInBoard(row, col) {
    return row >= 0 && row < MAX_LINE_COUNT && col >= 0 && col < MAX_LINE_COUNT;
  }
  function getAnswerPoint(row, col, dir) {
    if (dir === 0) return [row, col - 4];
    if (dir === 1) return [row - 4, col - 4];
    if (dir === 2) return [row - 4, col];
    if (dir === 3) return [row, col];
  }
}

solution(multiLineInput);
