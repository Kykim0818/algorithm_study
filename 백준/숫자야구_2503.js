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

const Q_COUNT_INDEX = 0;
function solution(multiLineInput) {
  const questionCount = parseInt(multiLineInput[Q_COUNT_INDEX]);
  const questions = [];
  const INPUT_IDX = 0;
  for (let i = 0; i < questionCount; i++) {
    const [input, strike, ball] = multiLineInput[i + 1]
      .split(" ")
      .map((val, idx) => {
        if (idx === INPUT_IDX) return val;
        return Number(val);
      });
    questions.push({ input, strike, ball });
  }
  let answer = 0;
  for (let p = 1; p <= 9; p++) {
    for (let q = 1; q <= 9; q++) {
      for (let r = 1; r <= 9; r++) {
        if (p === q || r === q || r === p) continue;
        if (checkPossibleAnswer([String(p), String(q), String(r)], questions)) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}

function checkPossibleAnswer(answer, questions) {
  let ret = true;
  questions.forEach((question) => {
    const { input, strike, ball } = question;
    let strikeResult = 0;
    let ballResult = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] === input[i]) {
        // strike 체크
        strikeResult++;
      } else {
        // ball 체크
        if (answer.includes(input[i])) ballResult++;
      }
    }
    if (!(strike === strikeResult && ball === ballResult)) {
      ret = false;
    }
  });
  return ret;
}

solution(multiLineInput);
