// https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

function solution(numbers) {
  let answer = 0;

  //TODO

  console.log(isPrime(25));
  return answer;
}

function isPrime(number) {
  let ret = true;
  if (number === 0 || number === 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) ret = false;
  }
  return ret;
}

const numbers = "17";
console.log(solution(numbers));
