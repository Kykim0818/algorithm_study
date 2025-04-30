/**
 *
 * @link https://www.acmicpc.net/problem/18352
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

// 단방향
// 모든 거리 1
// X에서 최단거리 K 안에 도착할 수 있는 도시들 번호 출력하는 프로그램
// 오름 차순으로 출력  줄바꿈해서 2 \n 3
// 하나도 없으면 -1
const CITY_ROAD_DISTANCE_START_INFO_INDEX = 0;
function solution(multiLineInput) {
  const [cityCnt, roadCnt, targetDist, startCityNum] =
    multiLineInput[CITY_ROAD_DISTANCE_START_INFO_INDEX].split(" ").map(Number);
  const roadMap = new Map();
  for (let i = 1; i <= cityCnt; i++) {
    roadMap.set(i, []);
  }

  for (let i = 0; i < roadCnt; i++) {
    const [to, from] = multiLineInput[i + 1].split(" ").map(Number);
    const canGoCityArr = roadMap.get(to);
    canGoCityArr.push(from);
    roadMap.set(to, canGoCityArr);
  }
  console.log("roadMap", roadMap);

  let answer = "";
  console.log("input", multiLineInput);
  return answer;
}

solution(multiLineInput);
