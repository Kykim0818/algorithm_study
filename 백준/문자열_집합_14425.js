/**
 * @완
 * @https://www.acmicpc.net/problem/14425
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

const N_M_INDEX = 0;
function solution(multiLineInput) {
  const [n, m] = multiLineInput[N_M_INDEX].split(" ").map(Number);
  const s = new Set();

  for (let i = 0; i < n; i++) {
    s.add(multiLineInput[i + 1]);
  }

  const list = [];
  for (let i = 0; i < m; i++) {
    list.push(multiLineInput[i + 1 + n]);
  }

  let answer = 0;
  list.forEach((value) => {
    if (s.has(value)) answer++;
  });

  console.log(answer);

  // return answer;
}

solution(multiLineInput);
