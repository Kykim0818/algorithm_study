/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43238
 *
 * limit
 * 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
 * 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
 * 심사관은 1명 이상 100,000명 이하입니다.

 */

function solution(n, times) {
  var answer = 0;
  const counterCnt = times.length;
  const curTimes = new Array(counterCnt).fill(0);
  // console.log(curTimes);

  // 오름차순 정렬
  times.sort(function (a, b) {
    return a - b;
  });

  // console.log(times);
  for (let i = 0; i < n; i++) {
    let time = Number.MAX_SAFE_INTEGER;
    let counterIdx = -1;
    for (let j = 0; j < counterCnt; j++) {
      if (time > curTimes[j] + times[j]) {
        time = curTimes[j] + times[j];
        counterIdx = j;
      }
    }
    // 제일 작은값 구함
    curTimes[counterIdx] += times[counterIdx];
  }

  curTimes.sort(function (a, b) {
    return a - b;
  });
  answer = curTimes[curTimes.length - 1];
  return answer;
}

const n = 6;
const times = [7, 10];
console.log(solution(n, times));

// 테스트 1 〉	통과 (0.20ms, 33.4MB)
// 테스트 2 〉	통과 (2.75ms, 36.5MB)
// 테스트 3 〉	통과 (18.91ms, 37.5MB)
// 테스트 4 〉	실패 (시간 초과)
// 테스트 5 〉	실패 (시간 초과)
// 테스트 6 〉	실패 (시간 초과)
// 테스트 7 〉	실패 (시간 초과)
// 테스트 8 〉	실패 (시간 초과)
// 테스트 9 〉	실패 (시간 초과)
