/**
 * @
 * @link https://www.acmicpc.net/problem/11399
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
const PERSON_NUMBER_INDEX = 0;
function solution(multiLineInput) {
  const personCount = parseInt(multiLineInput[PERSON_NUMBER_INDEX]);
  const usageTimePerPerson = multiLineInput[PERSON_NUMBER_INDEX + 1]
    .split(" ")
    .map(Number);
  usageTimePerPerson.sort((a, b) => a - b);

  const timeSum = Array(personCount).fill(0);
  for (let i = 0; i < personCount; i++) {
    if (i === 0) timeSum[i] = usageTimePerPerson[i];
    else {
      timeSum[i] = timeSum[i - 1] + usageTimePerPerson[i];
    }
  }

  const answer = timeSum.reduce((acc, num) => acc + num, 0);
  console.log(answer);
  return answer;
}

solution(multiLineInput);

/**
 * 아이디어
 * 앞사람이 걸린시간만큼 뒷사람이 걸리는시간이 제일 적은 순서로 뽑으면 최소가 됨
 * 오름차순으로 sorting 후 시간합 계산
 * 시간합 계산 방식
 * a , b ,c , d, e 일떄
 * a , a+b , a+b+c , a+b+c+d , a+b+c+d+e
 *
 */
