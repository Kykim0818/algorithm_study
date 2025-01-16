/**
 * @link https://www.acmicpc.net/problem/2156
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

const ALL_WINE_COUNT_IDX = 0;
function solution(multiLineInput) {
  const wineAllCount = parseInt(multiLineInput[ALL_WINE_COUNT_IDX]);
  const wines = [];

  for (let i = 0; i < wineAllCount; i++) {
    wines.push(parseInt(multiLineInput[i + 1]));
  }
  let answer = 0;
  if (wineAllCount <= 2) {
    for (let i = 0; i < wineAllCount; i++) {
      answer += wines[i];
    }
  } else {
    // wineAllCount >= 3
    const memo = [
      [wines[0], 1],
      [wines[0] + wines[1], 2],
    ];
    for (let i = 2; i < wines.length; i++) {
      const prevContinuosNum = memo[i - 1][1];
      if (prevContinuosNum === 0 || prevContinuosNum === 1) {
        memo[i] = [memo[i - 1][0] + wines[i], prevContinuosNum + 1];
      }
      if (prevContinuosNum === 2) {
        const cases = [
          [memo[i - 1][0] - wines[i - 1] + wines[i], 1],
          [memo[i - 1][0] - wines[i - 2] + wines[i], 2],
          [memo[i - 1][0], 0],
        ];
        let maxCase = cases[0];
        for (let j = 1; j < cases.length; j++) {
          if (maxCase[0] < cases[j][0]) {
            maxCase = cases[j];
          } else if (maxCase[0] === cases[j][0]) {
            if (maxCase[0][1] > cases[j][1]) maxCase = cases[j];
          }
        }
        memo.push([...maxCase]);
      }
    }
    console.log("memo", memo);
    answer = memo[wineAllCount - 1][0];
  }
  console.log("answer", answer);
  //   console.log("wines", wines);

  return answer;
}

solution(multiLineInput);
