function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval];
  const maxValue = Math.max(intervals[intervals.length - 1][1], newInterval[1]);
  const checks = Array(2 * (maxValue + 1) + 1).fill(false);

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    for (let j = start; j <= end; j++) {
      checks[2 * j] = true;
      if (j !== start) {
        checks[2 * j - 1] = true;
      }
    }
  }

  const [start, end] = newInterval;
  for (let i = start; i <= end; i++) {
    checks[2 * i] = true;
    if (i !== start) {
      checks[2 * i - 1] = true;
    }
  }
  console.log("checks", checks);
  //
  const answer: number[][] = [];
  let isIntervalStart = false;
  let startIdx: number = 0;
  for (let i = 1; i < checks.length; i++) {
    if (isIntervalStart === false && checks[i]) {
      isIntervalStart = true;
      startIdx = i;
    }

    if (isIntervalStart && (checks[i] === false || i === checks.length - 1)) {
      isIntervalStart = false;
      answer.push([Math.floor(startIdx / 2), Math.floor(i / 2)]);
    }
  }

  return answer;
}

const intervals = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];
