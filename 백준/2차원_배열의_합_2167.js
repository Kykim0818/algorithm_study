/**
 * @link https://www.acmicpc.net/problem/2167
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

const ARR_SIZE_IDX = 0;
function solution(multiLineInput) {
  const numbers = [];
  const [row, _] = multiLineInput[ARR_SIZE_IDX].split(" ").map((val) =>
    parseInt(val)
  );

  for (let i = 0; i < row; i++) {
    numbers.push(
      multiLineInput[i + 1].split(" ").map((value) => parseInt(value))
    );
  }

  const answer = [];
  // 0번쨰, row 사이즈 다음 인덱스가 구하려는 tn
  const caseIndex = row + 1;
  const problemCount = multiLineInput[caseIndex];

  for (let i = 0; i < problemCount; i++) {
    const [sRow, sCol, aRow, aCol] = multiLineInput[caseIndex + i + 1]
      .split(" ")
      .map((val) => parseInt(val));
    let sum = 0;
    for (let p = sRow - 1; p < aRow; p++) {
      for (let q = sCol - 1; q < aCol; q++) {
        sum += numbers[p][q];
      }
    }
    answer.push(sum);
  }

  // console.log("input", multiLineInput);

  console.log(answer.join("\n"));
  return answer;
}
solution(multiLineInput);
