/**
 * @완
 * @link https://www.acmicpc.net/problem/9012
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

const CASE_COUNT_INDEX = 0;
function solution(multiLineInput) {
  const answer = [];
  const caseCount = parseInt(multiLineInput[CASE_COUNT_INDEX]);
  for (let i = 0; i < caseCount; i++) {
    const inputArr = multiLineInput[i + 1].split("");
    let sum = 0;
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[j] === "(") sum += 1;
      if (inputArr[j] === ")") sum -= 1;

      if (sum < 0) {
        answer.push("NO");
        break;
      }
    }

    if (sum === 0) answer.push("YES");
    else if (sum > 0) answer.push("NO");
  }
  console.log(answer.join("\n"));
  // console.log("input", multiLineInput);

  return answer;
}

solution(multiLineInput);
