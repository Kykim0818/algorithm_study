/**
 *  @link https://www.acmicpc.net/problem/2630
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

const INPUT_SIZE_INDEX = 0;
const COLOR_WHITE = 0;
const COLOR_BLUE = 1;
function solution(multiLineInput) {
  const mapSize = parseInt(multiLineInput[INPUT_SIZE_INDEX]);
  const map = [];
  for (let i = 0; i < mapSize; i++) {
    map.push(multiLineInput[i + 1].split(" ").map(Number));
  }
  let [whiteCount, blueCount] = [0, 0];
  [whiteCount, blueCount] = foldPaper(0, 0, mapSize);

  console.log(whiteCount);
  console.log(blueCount);
  // return answer;
  function foldPaper(startRow, startCol, size) {
    let whiteCount = 0;
    let blueCount = 0;
    let initVal = map[startRow][startCol];
    let flag = true;
    for (let i = startRow; i < startRow + size; i++) {
      if (flag === false) break;
      for (let j = startCol; j < startCol + size; j++) {
        if (flag === false) break;
        if (initVal !== map[i][j]) {
          flag = false;

          // size 4
          // 0 1 2 3
          // 1
          // 2
          // 3

          // 1/4
          let result = foldPaper(startRow, startCol, size / 2);
          whiteCount += result[0];
          blueCount += result[1];

          // 2/4
          result = foldPaper(startRow, startCol + size / 2, size / 2);
          whiteCount += result[0];
          blueCount += result[1];

          // 3/4
          result = foldPaper(startRow + size / 2, startCol, size / 2);
          whiteCount += result[0];
          blueCount += result[1];

          // 4/4
          result = foldPaper(
            startRow + size / 2,
            startCol + size / 2,
            size / 2
          );
          whiteCount += result[0];
          blueCount += result[1];
        }
      }
    }
    if (flag) {
      if (initVal === COLOR_BLUE) blueCount++;
      else whiteCount++;
    }
    return [whiteCount, blueCount];
  }
}

solution(multiLineInput);
