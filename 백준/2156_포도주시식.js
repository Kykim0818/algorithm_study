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
    const memo = [0, wines[0], wines[0] + wines[1]];

    for (let i = 3; i <= wines.length; i++) {
      memo[i] = Math.max(
        memo[i - 1],
        memo[i - 2] + wines[i - 1],
        memo[i - 3] + wines[i - 2] + wines[i - 1]
      );
    }
    answer = memo[wines.length];
    // console.log(memo);
  }
  console.log("answer", answer);
  //   console.log("wines", wines);

  return answer;
}

solution(multiLineInput);

// 6 10 13 9 8 1

// m1 = 6
// m2 = 16

// m3 =
// 1. M(n-1) 안마시기
// 2. M(n-2) + A 이전잔 안마시고 n번쨰잔만시기
// 3. M(n-3) + 이전잔 마시고, n번쨰잔도 마시기
