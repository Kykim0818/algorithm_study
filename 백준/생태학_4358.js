/**
 *  @ 완
 *  @link https://www.acmicpc.net/problem/4358
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

function solution(multiLineInput) {
  const treeMap = new Map();
  for (let i = 0; i < multiLineInput.length; i++) {
    const treeName = multiLineInput[i];
    if (treeMap.has(treeName)) {
      treeMap.set(treeName, treeMap.get(treeName) + 1);
    } else {
      treeMap.set(treeName, 1);
    }
  }
  const trees = [...treeMap.keys()];
  trees.sort();
  const treeCnt = multiLineInput.length;
  trees.forEach((tree) => {
    console.log(`${tree} ${((treeMap.get(tree) / treeCnt) * 100).toFixed(4)}`);
  });
}

solution(multiLineInput);
