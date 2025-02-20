/**
 * @완
 * @link
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

const INGREDIENT_COUNT_IDX = 0;
function solution(multiLineInput) {
  const count = parseInt(multiLineInput[INGREDIENT_COUNT_IDX]);
  const ingredients = [];

  for (let i = 0; i < count; i++) {
    const [sin, ssn] = multiLineInput[i + 1].split(" ").map(Number);
    ingredients.push([sin, ssn]);
  }

  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= count; i++) {
    combination([], i, Array(count).fill(false));
  }

  console.log(answer);

  return answer;

  function combination(result, needCnt, used) {
    if (result.length === needCnt) {
      let sinSum = 1;
      let ssnSum = 0;
      result.forEach((ingredientIdx) => {
        sinSum *= ingredients[ingredientIdx][0];
        ssnSum += ingredients[ingredientIdx][1];
      });
      const gap = Math.abs(sinSum - ssnSum);
      answer = Math.min(answer, gap);
    }

    for (let i = result.length; i < used.length; i++) {
      if (result.includes(i)) continue;
      combination([...result, i], needCnt, used);
    }
  }
}

solution(multiLineInput);
