function solution(N, road, K) {
  const start = 0;
  const graph = new Array(N);
  for (let i = 0; i < N; i++) {
    graph[i] = new Array(N);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) graph[i][j] = 0;
      else {
        graph[i][j] = Number.MAX_SAFE_INTEGER;
      }
    }
  }
  //
  road.forEach((eachRoad) => {
    if (eachRoad[2] < graph[eachRoad[0] - 1][eachRoad[1] - 1]) {
      graph[eachRoad[0] - 1][eachRoad[1] - 1] = eachRoad[2];
      graph[eachRoad[1] - 1][eachRoad[0] - 1] = eachRoad[2];
    }
  });
  // console.table(graph);

  const minArray = new Array(N).fill(Number.MAX_SAFE_INTEGER);
  minArray[start] = 0;

  const queue = [];
  queue.push(start);

  for (let i = 0; i < queue.length; i++) {
    const cur = queue[i];

    for (let j = 0; j < N; j++) {
      if (cur === j) continue;
      if (minArray[j] > minArray[cur] + graph[cur][j]) {
        queue.push(j);
        minArray[j] = minArray[cur] + graph[cur][j];
      }
    }
  }

  // console.log(minArray);

  let answer = 0;
  minArray.forEach((eachNode) => {
    if (eachNode <= K) answer++;
  });

  return answer;
}
