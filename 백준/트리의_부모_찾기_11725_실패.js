/**
 * @실패
 * @link https://www.acmicpc.net/problem/11725
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

const NODE_COUNT_INDEX = 0;
function solution(multiLineInput) {
  const nodeCnt = parseInt(multiLineInput[NODE_COUNT_INDEX]);

  // init
  const tree = Array(nodeCnt * 4).fill(0);

  // 0 : node's root , 1 : node's number , 2 : leftChild number , 3 : rightChild number
  // init firstNode
  tree[0] = 1; // root

  // set each node's value to tree array
  for (let i = 1; i <= nodeCnt; i++) {
    tree[(i - 1) * 4 + 1] = i;
  }

  // 둘중에 루트 노드가 있는지 확인하고 있는 경우에는 루트노드가 있는 쪽을 parent로 없는쪽을 child로 하려고함
  // 둘다 루트 노드가 있을 경우는 없음 연결되었다면 한쪽이 parent 고 한쪽이 child 여 야함
  // 연결된 두 정점이 둘 다 루트 노드가 없을 경우에는 어떻게하지?
  // => 일단 미결정 노드에 넣어두고 루프돌리면서 둘중에 하나라도 루트가 정해질떄까지 반복 해야할 듯
  const noRootArr = [];
  for (let i = 0; i < nodeCnt - 1; i++) {
    const [first, second] = multiLineInput[i + 1].split(" ").map(Number);
    const firstRootIdx = (first - 1) * 4;
    const secondRootIdx = (second - 1) * 4;

    if (tree[firstRootIdx] !== 0 && tree[secondRootIdx] === 0) {
      tree[secondRootIdx] = first;
      // set child
      if (tree[firstRootIdx + 2] === 0) {
        // left
        tree[firstRootIdx + 2] = second;
      } else {
        // right
        tree[firstRootIdx + 3] = second;
      }
    } else if (tree[secondRootIdx] !== 0 && tree[firstRootIdx] === 0) {
      tree[firstRootIdx] = second;
      if (tree[secondRootIdx + 2] === 0) {
        // left
        tree[secondRootIdx + 2] = first;
      } else {
        tree[secondRootIdx + 3] = first;
      }
    } else {
      noRootArr.push([first, second]);
    }
    // 둘다 차있는 경우는 없을텐데 해당 경우에 대한 처리 필요?
  }
  //
  for (let i = 0; i < noRootArr.length; i++) {
    const [first, second] = noRootArr[i];
    const firstRootIdx = (first - 1) * 4;
    const secondRootIdx = (second - 1) * 4;

    if (tree[firstRootIdx] !== 0 && tree[secondRootIdx] === 0) {
      tree[secondRootIdx] = first;
      // set child
      if (tree[firstRootIdx + 2] === 0) {
        // left
        tree[firstRootIdx + 2] = second;
      } else {
        // right
        tree[firstRootIdx + 3] = second;
      }
    } else if (tree[secondRootIdx] !== 0 && tree[firstRootIdx] === 0) {
      tree[firstRootIdx] = second;
      if (tree[secondRootIdx + 2] === 0) {
        // left
        tree[secondRootIdx + 2] = first;
      } else {
        tree[secondRootIdx + 3] = first;
      }
    } else {
      noRootArr.push([first, second]);
    }
  }

  const answer = [];

  for (let i = 2; i <= nodeCnt; i++) {
    answer.push(tree[(i - 1) * 4]);
  }
  console.log(answer.join("\n"));
  return answer;
}

solution(multiLineInput);

// 7
// 1 6
// 6 3
// 3 5
// 4 1
// 2 4
// 4 7
