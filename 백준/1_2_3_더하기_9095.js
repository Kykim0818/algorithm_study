/**
 *  @완
 *  @link https://www.acmicpc.net/problem/9095
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

const TEST_CASE_IDX = 0;
function solution(multiLineInput) {
  const testCaseCnt = parseInt(multiLineInput[TEST_CASE_IDX]);
  const memo = [];
  const answer = [];
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;
  for (let i = 0; i < testCaseCnt; i++) {
    const target = parseInt(multiLineInput[i + 1]);
    answer.push(getMemo(target));
  }
  console.log(answer.join("\n"));
  return answer;

  function getMemo(target) {
    if (memo[target]) return memo[target];
    for (let i = 4; i <= target; i++) {
      if (memo[i]) continue;
      memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }
    return memo[target];
  }
}

solution(multiLineInput);

/**
 *  dp
 *  [1] = 1 => 1
 *  [2] = 2  , [1] + 1 , 2  => 2
 *  [3] = 3 [1] + 2(1) , [2] + 1(2), 3(1) => 4
 *  [4] = [1] + 3, [2] + 2, [3] + 1  => 7
 *  [5] = [4] + [3] + [2]
 */
