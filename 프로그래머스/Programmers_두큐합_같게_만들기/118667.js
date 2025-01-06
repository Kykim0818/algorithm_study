function solution(queue1, queue2) {
  let sum1 = 0;
  let sum2 = 0;

  const allLen = queue1.length * 3;

  queue1.forEach((q) => (sum1 += q));
  queue2.forEach((q) => (sum2 += q));
  // 합이홀수면 둘로 같아질수 없으므로 -1
  if ((sum1 + sum2) % 2 === 1) return -1;

  // 양 합이 같으면 이동하지 않아도 되므로 0
  if (sum1 === sum2) return 0;

  let q1Idx = 0;
  let q2Idx = 0;

  let q1s = sum1;
  let q2s = sum2;

  const queue12 = [...queue1, ...queue2];
  const queue21 = [...queue2, ...queue1];

  let answer = 0;
  while (answer < allLen) {
    answer++;
    if (q1s < q2s) {
      // q2 -> q1
      if (queue21[q2Idx] === undefined) {
        answer = -1;
        break;
      }
      const tmp = queue21[q2Idx];
      q1s += tmp;
      q2s -= tmp;
      q2Idx++;

      if (q1s === q2s) {
        break;
      }
    } else {
      // q1 -> q2
      if (queue12[q1Idx] === undefined) {
        answer = -1;
        break;
      }
      const tmp = queue12[q1Idx];
      q1s -= tmp;
      q2s += tmp;
      q1Idx++;
      if (q1s === q2s) {
        break;
      }
    }
  }

  if (answer >= allLen) answer = -1;
  return answer;
}

const p1 = [3, 2, 7, 2];
const p2 = [4, 6, 5, 1];
solution(p1, p2);
