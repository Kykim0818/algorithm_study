/**
 * @완
 * @link https://www.acmicpc.net/problem/11726
 */
const fs = require("fs");

/**
 * a b
 */
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const DIVIDER = 10007;
function solution(input) {
  const tileWidth = Number(input);
  const memo = Array(tileWidth + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= tileWidth; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % DIVIDER;
  }

  const answer = memo[tileWidth] % DIVIDER;
  console.log("answer", answer);
  return answer;
}

solution(input);
