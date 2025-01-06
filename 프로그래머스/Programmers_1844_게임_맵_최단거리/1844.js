function solution(maps) {
  var answer = 0;
  //
  const rowMax = maps.length;
  const colMax = maps[0].length;

  const CAN_GO = 1;
  const rowDir = [0, 0, -1, 1];
  const colDir = [-1, 1, 0, 0];
  const ROW_IDX = 0;
  const COL_IDX = 1;
  // 일단 배열로 구현후, 큐로 전환
  const queue = [];
  queue.push([0, 0]);

  // 2차원 배열 만들기
  // 2-1.
  const visitMap = new Array(rowMax);
  for (let i = 0; i < rowMax; i++) {
    visitMap[i] = [];
    for (let j = 0; j < colMax; j++) {
      visitMap[i].push([-1, false]);
    }
  }
  // console.table(visitMap);
  visitMap[0][0] = [1, true];
  //
  for (let i = 0; i < queue.length; i++) {
    const qOut = queue[i];
    for (let j = 0; j < 4; j++) {
      const mvRow = qOut[ROW_IDX] + rowDir[j];
      const mvCol = qOut[COL_IDX] + colDir[j];
      // 현재까지 온 칸수
      const cur = visitMap[qOut[ROW_IDX]][qOut[COL_IDX]][0];
      // 경계처리
      if (mvRow >= 0 && mvRow < rowMax && mvCol >= 0 && mvCol < colMax) {
        // 벽이 아니고
        if (maps[mvRow][mvCol] === CAN_GO) {
          // 한번도 방문하지 않았으면,
          if (visitMap[mvRow][mvCol][1] === false) {
            // 방문처리
            visitMap[mvRow][mvCol][1] = true;
            // 지금 내가 사용한 칸 + 1
            visitMap[mvRow][mvCol][0] = cur + 1;
            // queue에 push
            queue.push([mvRow, mvCol]);
          } else {
            // 방문 했는데 사용한 칸수가 내가 현재 이동할 칸수 보다많으면 갱신
            if (visitMap[mvRow][mvCol][0] > cur + 1) {
              visitMap[mvRow][mvCol][0] = cur + 1;
              queue.push([mvRow, mvCol]);
            }
          }
        }
      }
    }
  }
  if (visitMap[rowMax - 1][colMax - 1][0] === -1) return -1;
  answer = visitMap[rowMax - 1][colMax - 1][0];

  return answer;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps));
