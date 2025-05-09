/**
 * 완
 * @link https://www.acmicpc.net/problem/20365
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
  .split("\n");

const PROBLEM_COUNT_INDEX = 0;
const PROBLEM_COLOR_INDEX = 1;
function solution(multiLineInput) {
  let answer = 0;
  const problemCount = Number(multiLineInput[PROBLEM_COUNT_INDEX]);
  const problemColors = multiLineInput[PROBLEM_COLOR_INDEX];
  const processedArr = [];
  let standard = "";
  for (let char of problemColors) {
    if (standard !== char) {
      processedArr.push(char);
      standard = char;
    }
  }

  if (processedArr.length > 0) {
    if (processedArr[0] === processedArr[processedArr.length - 1])
      answer = (processedArr.length - 1) / 2 + 1;
    else answer = processedArr.length / 2 + 1;
  }
  console.log(answer);

  return answer;
}

solution(multiLineInput);
