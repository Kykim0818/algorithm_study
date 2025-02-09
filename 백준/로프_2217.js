/**
 * @link https://www.acmicpc.net/problem/2217
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

const ROPE_COUNT_IDX = 0;
function solution(multiLineInput) {
  const ropeCount = parseInt(multiLineInput[ROPE_COUNT_IDX]);
  const allRopeWeightAndCount = new Array(10001).fill(0);
  for (let i = 0; i < ropeCount; i++) {
    const ropeWeight = parseInt(multiLineInput[i + 1]);
    allRopeWeightAndCount[ropeWeight]++;
  }
  let selectRopeCount = 0;
  let maxWeight = 0;
  for (let i = 10000; i >= 1; i--) {
    if (allRopeWeightAndCount[i] !== 0) {
      const weight = i;
      selectRopeCount += allRopeWeightAndCount[i];
      maxWeight = Math.max(maxWeight, weight * selectRopeCount);
    }
  }
  const answer = maxWeight;
  console.log(answer);
  return answer;
}

solution(multiLineInput);
