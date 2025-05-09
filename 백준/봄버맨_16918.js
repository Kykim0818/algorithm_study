/**
 * 완
 * @link https://www.acmicpc.net/problem/16918
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

const ROW_COL_SECOND_INDEX = 0;
function solution(multiLineInput) {
  const [inputRow, inputCol, second] =
    multiLineInput[ROW_COL_SECOND_INDEX].split(" ").map(Number);

  const MAP_EMPTY = ".";
  const MAP_BOMB_SETUP = "O";
  const map = [];
  for (let i = 0; i < inputRow; i++) {
    map.push(multiLineInput[i + 1].split(""));
  }

  const mapState = Array.from(Array(inputRow), () => Array(inputCol).fill(0));

  for (let time = 1; time <= second; time++) {
    if (time === 1) {
      nothing();
    } else {
      updateBomb();
    }
    // console.log("------------- current second %d", time);
    // console.table(map);
    // console.table(mapState);
  }

  const answer = [];
  map.forEach((row) => {
    answer.push(row.join(""));
  });
  console.log(answer.join("\n"));
  return answer;

  function nothing() {
    for (let i = 0; i < inputRow; i++) {
      for (let j = 0; j < inputCol; j++) {
        if (map[i][j] === MAP_BOMB_SETUP) {
          mapState[i][j] = mapState[i][j] + 1;
        }
      }
    }
  }

  function updateBomb() {
    const dirRow = [0, 0, -1, 1];
    const dirCol = [-1, 1, 0, 0];

    const oneLeftBomb = [];
    for (let i = 0; i < inputRow; i++) {
      for (let j = 0; j < inputCol; j++) {
        if (map[i][j] === MAP_BOMB_SETUP) {
          mapState[i][j] = mapState[i][j] + 1;
        } else {
          //
          map[i][j] = MAP_BOMB_SETUP;
          mapState[i][j] = 0;
        }

        if (mapState[i][j] === 3) {
          oneLeftBomb.push([i, j]);
        }
      }
    }

    oneLeftBomb.forEach(([i, j]) => {
      // !!
      mapState[i][j] = 0;
      map[i][j] = MAP_EMPTY;
      // 4방향처리
      for (let dir = 0; dir < 4; dir++) {
        const movRow = i + dirRow[dir];
        const movCol = j + dirCol[dir];
        if (
          movRow >= 0 &&
          movRow < inputRow &&
          movCol >= 0 &&
          movCol < inputCol
        ) {
          mapState[movRow][movCol] = 0;
          map[movRow][movCol] = MAP_EMPTY;
        }
      }
    });
  }
}

solution(multiLineInput);

// 1.가장 처음에 봄버맨은 일부 칸에 폭탄을 설치해 놓는다. 모든 폭탄이 설치된 시간은 같다.
// 2.다음 1초 동안 봄버맨은 아무것도 하지 않는다.
// 3.다음 1초 동안 폭탄이 설치되어 있지 않은 모든 칸에 폭탄을 설치한다. 즉, 모든 칸은 폭탄을 가지고 있게 된다. 폭탄은 모두 동시에 설치했다고 가정한다.
// 4.1초가 지난 후에 3초 전에 설치된 폭탄이 모두 폭발한다.
// 3과 4를 반복한다.

// 폭탄을 설치해놓은 초기 상태가 주어졌을 때, N초가 흐른 후의 격자판 상태를 구하려고 한다.
