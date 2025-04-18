/**
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
  const [row, col, second] =
    multiLineInput[ROW_COL_SECOND_INDEX].split(" ").map(Number);

  const MAP_EMPTY = ".";
  const MAP_BOMB_SETUP = "O";
  const map = [];
  for (let i = 0; i < row; i++) {
    map.push(multiLineInput[i + 1].split(""));
  }

  const mapState = Array.from(Array(row), () => Array(col).fill(0));
  console.log("mapState", mapState);

  let answer = "";

  for (let time = 1; time <= second; time++) {
    if (time === 1) {
      nothing();
    } else {
      updateBomb();
    }
    console.log("------------- current second %d", time);
    console.table(map);
    console.table(mapState);
  }

  // console.log("input", multiLineInput);
  return answer;

  function nothing() {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (map[i][j] === MAP_BOMB_SETUP) {
          mapState[i][j] = mapState[i][j] + 1;
        }
      }
    }
  }

  function updateBomb() {
    const dirRow = [0, 0, -1, 1];
    const dirCol = [-1, 1, 0, 0];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (map[i][j] === MAP_BOMB_SETUP) {
          mapState[i][j] = mapState[i][j] + 1;
          if (mapState[i][j] === 3) {
            // !!
            mapState[i][j] = 0;
            map[i][j] = MAP_EMPTY;
            // 4방향처리
            for (let dir = 0; dir < 4; dir++) {
              mapState[i + dirRow[dir]][j + dirCol[dir]] = 0;
              map[i + dirRow[dir]][j + dirCol[dir]] = MAP_EMPTY;
            }
          }
        } else {
          //
          map[i][j] = MAP_BOMB_SETUP;
          mapState[i][j] = 0;
        }
      }
    }
  }
}

solution(multiLineInput);

// 1.가장 처음에 봄버맨은 일부 칸에 폭탄을 설치해 놓는다. 모든 폭탄이 설치된 시간은 같다.
// 2.다음 1초 동안 봄버맨은 아무것도 하지 않는다.
// 3.다음 1초 동안 폭탄이 설치되어 있지 않은 모든 칸에 폭탄을 설치한다. 즉, 모든 칸은 폭탄을 가지고 있게 된다. 폭탄은 모두 동시에 설치했다고 가정한다.
// 4.1초가 지난 후에 3초 전에 설치된 폭탄이 모두 폭발한다.
// 3과 4를 반복한다.

// 폭탄을 설치해놓은 초기 상태가 주어졌을 때, N초가 흐른 후의 격자판 상태를 구하려고 한다.
