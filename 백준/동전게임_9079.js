/**
 *  @완
 *  @link https://www.acmicpc.net/problem/9079
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

const TEST_CASE_CNT = 0;
function solution(multiLineInput) {
  const testCaseCnt = parseInt(multiLineInput[TEST_CASE_CNT]);
  const answer = [];
  const board = [];
  const reverseWays = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // 0
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ], // 1
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ], // 2
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], //
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ], //
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ], //
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // 대각선1
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ], // 대각선2
  ];
  let boardStateCount = {};
  for (let i = 0; i < testCaseCnt; i++) {
    for (let j = 0; j < 3; j++) {
      board[j] = multiLineInput[3 * i + j + 1].split(" ");
    }
    //
    answer.push(bfs(board));
    boardStateCount = {};
  }
  console.log(answer.join("\n"));

  // console.log("input", multiLineInput);
  return answer;

  function bfs(board) {
    // 초기 판이 뒤집을 필요가 없을 경우 확인
    if (isAllSame(board)) return 0;
    let allSameCounts = [];
    let queue = [];

    const initState = getBoardState(board);
    boardStateCount[initState] = 0;
    queue.push(initState);
    for (let p = 0; p < queue.length; p++) {
      const curState = queue[p];
      const executeCount = boardStateCount[curState];
      for (let i = 0; i < reverseWays.length; i++) {
        const curStateBoard = stateToBoard(curState);
        reverseWays[i].forEach(([row, col]) => {
          curStateBoard[row][col] = reverse(curStateBoard[row][col]);
        });
        const afterBoardState = getBoardState(curStateBoard);
        if (
          boardStateCount[afterBoardState] === undefined ||
          boardStateCount[afterBoardState] > executeCount + 1
        ) {
          if (isAllSame(curStateBoard)) {
            allSameCounts.push(executeCount + 1);
          } else {
            boardStateCount[afterBoardState] = executeCount + 1;
            queue.push(afterBoardState);
          }
        }
      }
    }
    return allSameCounts.length === 0 ? -1 : Math.min(...allSameCounts);
  }

  function getBoardState(board) {
    let state = "";
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        state += board[i][j];
      }
    }
    return state;
  }

  function stateToBoard(state) {
    const boardElements = state.split("");
    const board = Array.from(Array(3), () => Array(3).fill(0));
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = boardElements[i * 3 + j];
      }
    }
    return board;
  }
  function isAllSame(inputBoard) {
    let isAllSame = true;
    let cur = null;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (cur === null) cur = inputBoard[i][j];
        if (cur !== inputBoard[i][j]) return false;
      }
    }
    return isAllSame;
  }
  function reverse(val) {
    if (val === "T") return "H";
    return "T";
  }
}

solution(multiLineInput);
