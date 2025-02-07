/**
 *  @link https://www.acmicpc.net/problem/2422
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
  // console.log("input", multiLineInput);
  const [typeCount, listCount] = multiLineInput[N_M_INDEX].split(" ").map(
    (val) => Number(val)
  );
  console.log(typeCount, listCount);
  const noCombinationSetArr = Array.from(Array(typeCount + 1), () => new Set());

  for (let i = 0; i < listCount; i++) {
    const [typeA, typeB] = multiLineInput[i + 1].split(" ").map(Number);
    noCombinationSetArr[typeA].add(typeB);
    noCombinationSetArr[typeB].add(typeA);
  }

  console.log(noCombinationSetArr);
  const answer = getPossibleIceCreamCombinationCount(
    0,
    typeCount,
    [],
    0,
    noCombinationSetArr
  );

  console.log(answer);

  return answer;
}

function getPossibleIceCreamCombinationCount(
  answer,
  typeCount,
  selectedArr,
  curIceIndex,
  noCombinationSetArr
) {
  if (selectedArr.length === 3) return answer + 1;
  if (curIceIndex >= typeCount) return answer;

  for (let i = curIceIndex; i < typeCount; i++) {
    if (isEnableType(i + 1, selectedArr, noCombinationSetArr)) {
      answer = getPossibleIceCreamCombinationCount(
        answer,
        typeCount,
        [...selectedArr, i + 1],
        i + 1,
        noCombinationSetArr
      );
    }
  }
  return answer;
}

function isEnableType(iceCreamType, selectedArr, noCombinationSetArr) {
  let ret = true;
  selectedArr.forEach((selected) => {
    if (noCombinationSetArr[selected].has(iceCreamType)) {
      ret = false;
    }
  });
  return ret;
}

solution(multiLineInput);
