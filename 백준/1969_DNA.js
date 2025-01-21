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

function solution(multiLineInput) {
  //   console.log("input", multiLineInput);
  const [dnaCount, dnaLength] = multiLineInput[0].split(" ");
  //   console.log("dnaCount", dnaCount);
  //   console.log("dnaLength", dnaLength);

  const allDna = [[]];
  for (let i = 0; i < dnaCount; i++) {
    const dnaI = multiLineInput[i + 1];
    for (let j = 0; j < dnaLength; j++) {
      if (allDna[i] === undefined) {
        allDna[i] = [];
      }
      allDna[i].push(dnaI[j]);
    }
  }
  console.log(allDna);

  let answer = "";
  const dnaMap = new Map();
  for (let i = 0; i < dnaLength; i++) {
    for (let j = 0; j < dnaCount; j++) {
      const dna = allDna[j][i];
      if (dnaMap.has(dna)) {
        dnaMap.set(dna, dnaMap.get(dna) + 1);
      } else {
        dnaMap.set(dna, 1);
      }
    }
    //
    let maxCount = 0;
    let answerDna = "";
    dnaMap.forEach((_, key) => {
      const dnaFrequency = dnaMap.get(key);
      if (maxCount <= dnaFrequency) {
        if (maxCount === dnaFrequency) {
          if (key < answerDna) {
            answerDna = key;
            maxCount = dnaMap.get(key);
          }
        } else {
          answerDna = key;
          maxCount = dnaMap.get(key);
        }
      }
    });
    answer += answerDna;
    answerDna = "";
    dnaMap.clear();
  }

  // hamming distance
  let hammingDistance = 0;
  for (let i = 0; i < dnaCount; i++) {
    const dna = multiLineInput[i + 1];
    for (let j = 0; j < dnaLength; j++) {
      if (answer[j] !== dna[j]) {
        hammingDistance++;
      }
    }
  }

  console.log(answer + "\n" + hammingDistance);
  return answer;
}

solution(multiLineInput);
