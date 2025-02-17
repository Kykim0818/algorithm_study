/**
 *  @link https://www.acmicpc.net/problem/2606
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

const COMPUTER_COUNT_INDEX = 0;
const CONNECT_COUNT_INDEX = 1;
function solution(multiLineInput) {
  const computerCount = parseInt(multiLineInput[COMPUTER_COUNT_INDEX]);
  const connectCount = parseInt(multiLineInput[CONNECT_COUNT_INDEX]);
  const comConnectSetArr = Array.from(
    { length: computerCount + 1 },
    () => new Set()
  );
  const isChecked = Array(computerCount + 1).fill(false);
  let answer = 0;
  for (let i = 0; i < connectCount; i++) {
    const [com1, com2] = multiLineInput[i + 2].split(" ").map(Number);
    comConnectSetArr[com1].add(com2);
    comConnectSetArr[com2].add(com1);
  }
  // console.log(comConnectSetArr);

  const virusCom = [1];
  isChecked[1] = true;
  for (let i = 0; i < virusCom.length; i++) {
    const comNum = virusCom[i];
    isChecked[comNum] = true;
    comConnectSetArr[comNum].forEach((value) => {
      if (isChecked[value] === false) {
        answer++;
        isChecked[value] = true;
        virusCom.push(value);
      }
    });
  }
  console.log(answer);
  return answer;
}

solution(multiLineInput);
