function solution(numbers, target) {
  let answer = 0;

  const signs = [1, -1];

  const queue = [];
  queue.push({ sum: 0, idx: -1 });
  let curIdx = 0;
  // 시간초과로 애먹음..
  while (curIdx < queue.length) {
    // const current = queue.shift();
    const current = queue[curIdx++];

    if (current.idx === numbers.length - 1) {
      if (current.sum === target) answer++;
      continue;
    }
    signs.forEach((sign) => {
      queue.push({
        sum: current.sum + sign * numbers[current.idx + 1],
        idx: current.idx + 1,
      });
    });
  }
  return answer;
}
