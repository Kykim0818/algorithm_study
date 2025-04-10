/**
 * 완
 * @link https://www.acmicpc.net/problem/11508
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const PRODUCT_COUNT_INDEX = 0;
function solution() {
  let lineIdx = 0;
  let productCnt = 0;
  const productPriceArr = [];
  rl.on("line", (line) => {
    if (lineIdx === PRODUCT_COUNT_INDEX) {
      productCnt = parseInt(line);
      lineIdx++;
      return;
    }
    productPriceArr.push(parseInt(line));
    // 입력 다받으면
    lineIdx++;
    if (lineIdx > productCnt) {
      rl.close();
    }
  }).on("close", () => {
    let answer = 0;
    // 내림차순 정렬
    productPriceArr.sort((a, b) => b - a);
    productPriceArr.forEach((price, index) => {
      // 0 1 2 // 3 4 5
      if (index % 3 !== 2) answer += price;
    });
    console.log(answer);
    process.exit();
  });
}

solution();
