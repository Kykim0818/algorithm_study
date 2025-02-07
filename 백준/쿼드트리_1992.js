/**
 * @link
 */
const fs = require("fs");

/**
 * a b
 */
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

/**
 * a
 * b
 */
let multiLineInput = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

const VIDEO_SIZE_INDEX = 0;
function solution(multiLineInput) {
  const size = parseInt(multiLineInput[VIDEO_SIZE_INDEX]);
  const videoArr = [];
  for (let i = 0; i < size; i++) {
    const row = multiLineInput[i + 1];
    const rowToNums = [];
    for (let j = 0; j < row.length; j++) {
      rowToNums.push(parseInt(row[j]));
    }
    videoArr.push(rowToNums);
  }
  // console.log("videoArr", videoArr);
  let answer = convertToOneOrZero(0, 0, size, videoArr);
  if (answer.length === 3) console.log(answer[1]);
  else console.log(answer);
  // return answer;
}

function convertToOneOrZero(startRow, startCol, size, arr) {
  if (size === 1) return `(${arr[startRow][startCol]})`;
  let ret = "(";

  // 4개영역 나누기
  const [sRow1, sCol1, eRow1, eCol1] = [
    startRow,
    startCol,
    startRow + size / 2 - 1,
    startCol + size / 2 - 1,
  ];
  const [sRow2, sCol2, eRow2, eCol2] = [
    startRow,
    startCol + size / 2,
    startRow + size / 2 - 1,
    startCol + size - 1,
  ];
  const [sRow3, sCol3, eRow3, eCol3] = [
    startRow + size / 2,
    startCol,
    startRow + size - 1,
    startCol + size / 2 - 1,
  ];
  const [sRow4, sCol4, eRow4, eCol4] = [
    startRow + size / 2,
    startCol + size / 2,
    startRow + size - 1,
    startCol + size - 1,
  ];

  let parenthesesFlag = false;
  // 1
  let firstValue = arr[sRow1][sCol1];
  let breakFlag = false;
  for (let i = sRow1; i <= eRow1; i++) {
    for (let j = sCol1; j <= eCol1; j++) {
      const currentValue = arr[i][j];
      if (firstValue !== currentValue) {
        ret += convertToOneOrZero(sRow1, sCol1, size / 2, arr);
        breakFlag = true;
        break;
      }
    }
    if (breakFlag) break;
  }
  if (breakFlag === false) ret += firstValue;

  // 2
  firstValue = arr[sRow2][sCol2];
  breakFlag = false;
  for (let i = sRow2; i <= eRow2; i++) {
    for (let j = sCol2; j <= eCol2; j++) {
      const currentValue = arr[i][j];
      if (firstValue !== currentValue) {
        ret += convertToOneOrZero(sRow2, sCol2, size / 2, arr);
        breakFlag = true;
        break;
      }
    }
    if (breakFlag) break;
  }
  if (breakFlag === false) ret += firstValue;

  // 3
  firstValue = arr[sRow3][sCol3];
  breakFlag = false;
  for (let i = sRow3; i <= eRow3; i++) {
    for (let j = sCol3; j <= eCol3; j++) {
      const currentValue = arr[i][j];
      if (firstValue !== currentValue) {
        ret += convertToOneOrZero(sRow3, sCol3, size / 2, arr);
        breakFlag = true;
        break;
      }
    }
    if (breakFlag) break;
  }
  if (breakFlag === false) ret += firstValue;

  // 4
  firstValue = arr[sRow4][sCol4];
  breakFlag = false;
  for (let i = sRow4; i <= eRow4; i++) {
    for (let j = sCol4; j <= eCol4; j++) {
      const currentValue = arr[i][j];
      if (firstValue !== currentValue) {
        ret += convertToOneOrZero(sRow4, sCol4, size / 2, arr);
        breakFlag = true;
        break;
      }
    }
    if (breakFlag) break;
  }
  if (breakFlag === false) ret += firstValue;
  ret += ")";

  // 연속 4개숫자 합치기
  let sameNumCounter = 0;
  let saveNum = -1;
  let answer = "";
  let saveStr = "";
  for (let i = 0; i < ret.length; i++) {
    if (ret[i] === ")" || ret[i] === "(") {
      answer += saveStr;
      saveStr = "";
      answer += ret[i];
      sameNumCounter = 0;
      saveNum = -1;
    } else {
      saveStr += ret[i];
      if (saveNum === ret[i]) {
        sameNumCounter++;
      } else {
        saveNum = ret[i];
        sameNumCounter = 1;
      }

      if (sameNumCounter === 4) {
        answer += saveNum;
        saveNum = -1;
        sameNumCounter = 0;
        saveStr = "";
      }
    }
  }
  return answer;
}

solution(multiLineInput);
