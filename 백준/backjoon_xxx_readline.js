/**
 *  @link https://www.acmicpc.net/problem/2075
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  let answer = "";
  let lineIdx = 0;
  rl.on("line", (line) => {
    if (lineIdx === 0) {
    }
    // 입력 다받으면
    rl.close();
  }).on("close", () => {
    console.log(answer);
    process.exit();
  });
}

solution();
