/**
 * @link https://www.acmicpc.net/problem/1600
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

const KNIGHT_MOVE_CNT_IDX = 0;
const SIZE_IDX = 1;

const rowDir = [0, 0, 1, -1];
const colDir = [1, -1, 0, 0];
const kRowDir = [-2, -2, -1, 1, 2, 2, 1, -1];
const kColDir = [-1, 1, 2, 2, -1, 1, -2, -2];

function solution(multiLineInput) {
  const canKnightMoveCnt = parseInt(multiLineInput[KNIGHT_MOVE_CNT_IDX]);
  const [mapCol, mapRow] = multiLineInput[SIZE_IDX].split(" ").map((v) =>
    parseInt(v)
  );
  const map = [];
  const mapInfo = Array.from(Array(mapRow), () =>
    new Array(mapCol).fill({ moveCnt: -1 })
  );
  const mapVisit = Array.from(Array(canKnightMoveCnt + 1), () =>
    new Array(mapRow).fill(new Array(mapCol).fill(-1))
  );

  //   console.log("mapVisit", mapVisit);

  for (let i = 0; i < mapRow; i++) {
    map.push(multiLineInput[i + 2].split(" ").map((v) => parseInt(v)));
  }

  //   console.log("map", map);
  //   console.log("mapInfo", mapInfo);

  const [startRow, startCol] = [0, 0];
  const [goalRow, goalCol] = [mapRow - 1, mapCol - 1];

  // start
  const startInfo = {
    row: startRow,
    col: startCol,
    moveCnt: 0,
    kMoveCnt: 0,
  };
  const search = [startInfo];

  for (let i = 0; i < search.length; i++) {
    const curInfo = search[i];
    const { row, col, moveCnt, kMoveCnt } = curInfo;
    mapVisit[kMoveCnt][row][col] = moveCnt;

    for (let i = 0; i < 4; i++) {
      const mRow = row + rowDir[i];
      const mCol = col + colDir[i];
      if (isInMapIdx(mRow, mCol) && isNotBlock(mRow, mCol)) {
        if (mapVisit[kMoveCnt][mRow][mCol] === -1) {
          search.push({
            row: mRow,
            col: mCol,
            moveCnt: mapVisit[kMoveCnt][row][col] + 1,
            kMoveCnt,
          });
        }
      }
    }
    if (kMoveCnt < canKnightMoveCnt) {
      // knight move
      for (let i = 0; i < 8; i++) {
        const mRow = row + kRowDir[i];
        const mCol = col + kColDir[i];
        if (isInMapIdx(mRow, mCol) && isNotBlock(mRow, mCol)) {
          if (mapVisit[kMoveCnt][mRow][mCol] === -1) {
            search.push({
              row: mRow,
              col: mCol,
              moveCnt: mapVisit[kMoveCnt][row][col] + 1,
              kMoveCnt: kMoveCnt + 1,
            });
          }
        }
      }
    }
  }

  const goalMoveCnts = [];
  for (let i = 0; i <= canKnightMoveCnt; i++) {
    goalMoveCnts.push(mapVisit[i][goalRow][goalCol]);
  }

  console.log("mapVisit", mapVisit[goalRow][goalCol]);
  console.log("answer", goalMoveCnts);
  //  return answer;

  function isInMapIdx(row, col) {
    return row >= 0 && col >= 0 && row < mapRow && col < mapCol;
  }
  function isNotBlock(row, col) {
    return map[row][col] !== 1;
  }
}

solution(multiLineInput);
