/**
 * @link https://school.programmers.co.kr/learn/challenges?order=recent&languages=java&partIds=31236
 */
class Queue {
  constructor() {
    this.array = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.array[this.tail++] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const value = this.array[this.head];
    delete this.array[this.head++];
    return value;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function solution(alp, cop, problems) {
  let answer = Number.MAX_SAFE_INTEGER;
  let [iniAlp, iniCop] = [alp, cop];
  let goalAlp = 0;
  let goalCop = 0;

  problems.forEach((problem) => {
    // alp
    goalAlp = Math.max(problem[0], goalAlp);
    goalCop = Math.max(problem[1], goalCop);
  });
  //   console.log(goalAlp, goalCop);

  if (iniAlp >= goalAlp && iniCop >= goalCop) {
    console.log(0);
    return 0;
  }

  const costArr = [];
  for (let i = 0; i <= goalAlp; i++) {
    costArr.push(Array(goalCop + 1).fill(Number.MAX_SAFE_INTEGER));
  }

  //   console.log(costArr);
  if (iniAlp >= goalAlp) {
    iniAlp = goalAlp;
  }
  if (iniCop >= goalCop) {
    iniCop = goalCop;
  }
  costArr[iniAlp][iniCop] = 0;
  //   const queue = [[iniAlp, iniCop]];
  const queue = new Queue();
  queue.enqueue([iniAlp, iniCop]);
  while (!queue.isEmpty()) {
    const [curAlp, curCop] = queue.dequeue();
    // alp + 1 , cost 1
    let [nextAlp, nextCop] = [curAlp + 1, curCop];

    if (nextAlp >= goalAlp) {
      nextAlp = goalAlp;
    }
    if (nextCop >= goalCop) {
      nextCop = goalCop;
    }

    if (costArr[nextAlp][nextCop] > costArr[curAlp][curCop] + 1) {
      costArr[nextAlp][nextCop] = costArr[curAlp][curCop] + 1;
      //
      if (nextAlp >= goalAlp && nextCop >= goalCop) {
        answer =
          answer > costArr[curAlp][curCop] + 1
            ? costArr[curAlp][curCop] + 1
            : answer;
      } else {
        queue.enqueue([nextAlp, nextCop]);
      }
    }
    // cop + 1 , cost 1
    [nextAlp, nextCop] = [curAlp, curCop + 1];
    if (nextAlp >= goalAlp) {
      nextAlp = goalAlp;
    }
    if (nextCop >= goalCop) {
      nextCop = goalCop;
    }
    if (costArr[nextAlp][nextCop] > costArr[curAlp][curCop] + 1) {
      costArr[nextAlp][nextCop] = costArr[curAlp][curCop] + 1;
      //
      if (nextAlp >= goalAlp && nextCop >= goalCop) {
        answer =
          answer > costArr[curAlp][curCop] + 1
            ? costArr[curAlp][curCop] + 1
            : answer;
      } else {
        queue.enqueue([nextAlp, nextCop]);
      }
    }
    for (let j = 0; j < problems.length; j++) {
      if (canSolve(curAlp, curCop, j)) {
        [nextAlp, nextCop] = [curAlp + problems[j][2], curCop + problems[j][3]];
        if (nextAlp >= goalAlp) {
          nextAlp = goalAlp;
        }
        if (nextCop >= goalCop) {
          nextCop = goalCop;
        }
        if (
          costArr[nextAlp][nextCop] >
          costArr[curAlp][curCop] + problems[j][4]
        ) {
          costArr[nextAlp][nextCop] = costArr[curAlp][curCop] + problems[j][4];
          //
          if (nextAlp >= goalAlp && nextCop >= goalCop) {
            answer =
              answer > costArr[curAlp][curCop] + problems[j][4]
                ? costArr[curAlp][curCop] + problems[j][4]
                : answer;
          } else {
            queue.enqueue([nextAlp, nextCop]);
          }
        }
      }
    }
  }

  console.log(answer);

  return answer;

  function canSolve(alp, cop, problemIdx) {
    if (problems[problemIdx][2] === 0 && problems[problemIdx][3] === 0)
      return false;
    const reqAlp = problems[problemIdx][0];
    const reqCop = problems[problemIdx][1];
    return alp >= reqAlp && cop >= reqCop;
  }
}

solution(0, 0, [
  [0, 0, 2, 1, 2],
  [4, 5, 3, 1, 2],
  [4, 11, 4, 0, 2],
  [10, 4, 0, 4, 2],
]);
