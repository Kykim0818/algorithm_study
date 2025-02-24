/**
 *  @완
 *  @link https://www.acmicpc.net/problem/5568
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

// 2 <= k <=4
// 4 <= n <= 10
const CARD_COUNT_INDEX = 0;
const PICK_COUNT_INDEX = 1;
function solution(multiLineInput) {
  const cardCnt = parseInt(multiLineInput[CARD_COUNT_INDEX]);
  const pickCnt = parseInt(multiLineInput[PICK_COUNT_INDEX]);

  const cards = [];
  const usedCards = Array(cardCnt).fill(false);

  for (let i = 0; i < cardCnt; i++) {
    cards.push(parseInt(multiLineInput[i + 2]));
  }

  const numberSet = new Set();
  pickCard(0, []);
  console.log(numberSet.size);

  // return answer;

  function pickCard(pickedCnt, pickedCardArr) {
    if (pickedCnt === pickCnt) {
      numberSet.add(pickedCardArr.join(""));
      return;
    }

    for (let i = 0; i < cards.length; i++) {
      if (usedCards[i]) continue;
      usedCards[i] = true;
      pickedCardArr.push(cards[i]);
      pickCard(pickedCnt + 1, pickedCardArr);
      pickedCardArr.pop();
      usedCards[i] = false;
    }
  }
}

solution(multiLineInput);
