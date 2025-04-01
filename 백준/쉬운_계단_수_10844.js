/**
 *  @완
 *  @link https://www.acmicpc.net/problem/10844
 */
const fs = require("fs");

/**
 * a b
 */
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const LENGTH_COUNT_IDX = 0;
function solution(input) {
  const numLength = parseInt(input[LENGTH_COUNT_IDX]);
  const memo = Array.from(Array(numLength + 1), () => Array(10).fill(0));
  // 1
  for (let i = 1; i <= 9; i++) {
    memo[1][i] = 1;
  }

  const divider = 1000000000;
  for (let i = 2; i <= numLength; i++) {
    for (let j = 0; j <= 9; j++) {
      const before = memo?.[i - 1]?.[j - 1] ?? 0;
      const next = memo?.[i - 1]?.[j + 1] ?? 0;
      memo[i][j] = (before + next) % divider;
    }
  }

  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    answer += memo[numLength][i] % divider;
  }
  console.log(answer % divider);
  return answer;
}

solution(input);
