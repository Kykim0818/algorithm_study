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
  .split("\n");

function solution(input) {
  let answer = "";
  console.log("input", input);
  return answer;
}

solution(input);
