function solution(progresses, speeds) {
  // 진도가 100 -> 서비스
  // progresses
  // 각 배포마다 몇개의 기능
  const complete = 100;
  const leftStatus = [];
  progresses.forEach((progress, index) => {
    leftStatus.push({
      leftDay: Math.ceil((complete - progress) / speeds[index]),
      finished: false,
    });
  });
  var answer = [];
  for (let i = 0; i < leftStatus.length; i++) {
    if (leftStatus[i].finished === false) {
      let completeJob = 0;
      const useDay = leftStatus[i].leftDay;
      leftStatus[i].finished = true;
      completeJob++;
      for (let j = i + 1; j < leftStatus.length; j++) {
        if (leftStatus[j].leftDay <= useDay) {
          leftStatus[j].finished = true;
          completeJob++;
        } else {
          break;
        }
      }
      answer.push(completeJob);
    }
  }
  return answer;
}
