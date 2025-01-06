const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

// 종류별로 분리하고 ,
// 종류별로 돌면서 골랏

// 1종류 경우의 수
// - 선택한 종류수 * 리스트 개수

// 2종류 경우의 수
// - 2종류를 고를 수 있는 경우의수 , 고른 종류1의 리스트 * 고른 종류2의 리스트
// +
// ... n 종류 경우의 수
// -  총 n개에서 순서상관없이 , c개를 뽑는 방법 조합을 구현해야함

// nCr
// [ a , b , c ]
// [ false, false,false]
// a

function solution(clothes) {
  const list = {};
  clothes.forEach(([_name, category]) => {
    if (list[category]) {
      list[category]++;
    } else {
      list[category] = 1;
    }
  });
  let answer = 1;
  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      answer = answer * (list[key] + 1);
    }
  }
  return answer - 1;
}

solution(clothes);
