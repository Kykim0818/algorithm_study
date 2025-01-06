function solution(tickets) {
  var answer = [];

  // 모두 이용하여 여행경로를 짠다.
  // 모두 방문해야함 , tickets
  const visited = [];

  // JS에서는 ArrayList 대신 오브젝트로 함
  // { "ICN" : [] }
  const canGoList = {};
  // 1. 총 주어진 장소
  const locations = new Set();
  tickets.forEach((ticket) => {
    const start = ticket[0];
    const end = ticket[1];
    // Set에 추가
    locations.add(start);
    locations.add(end);
    if (canGoList[start] === undefined) canGoList[start] = [];
    canGoList[start].push(end);
  });
  console.log(locations);
  const startPo = "ICN";
  goTrip(startPo, canGoList, locations, visited, answer);
  return answer;
}

const goTrip = (startLo, canGoList, locations, visited, answer) => {
  // 다 방문햇으면 끝
  if (answer.length > 0) return;
  if (visited.length === locations.length) {
    answer = [...visited];
    return;
  }
  if (canGoList[startLo] === undefined || canGoList[startLo].length === 0)
    return;
  // 방문
  visited.push(startLo);
  // 이위치에서 갈수있는 위치 알아내야함
  const curCanGoList = [...canGoList[startLo]];
  curCanGoList.sort();
  //
  console.log(curCanGoList);
  curCanGoList.forEach((curCanGo) => {
    const findIdx = canGoList[startLo].find((curLo) => curLo === curCanGo);
    canGoList[startLo] = canGoList[startLo].splice(findIdx, 1);
    goTrip(curCanGo, canGoList, locations, visited, answer);
    canGoList[startLo].push(curCanGo);
  });
  visited.pop();
};
