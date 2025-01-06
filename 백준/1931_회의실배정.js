/**
 * @url https://www.acmicpc.net/problem/1931
 *
 */
const fs = require('fs');

/**
 * a
 * b
 */
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\r\n');

const CASE_COUNT_INDEX = 0;
function solution( input){
    let answer = 0;
    // let answerCase = [];
    // console.log('input', input);
    const caseCount = parseInt(input[CASE_COUNT_INDEX]);
    // # 회의 제일 끝시간 찾기 max
    let lastEndTime = 0;
    for(let i = 1; i <= caseCount; i++){
        lastEndTime = Math.max(lastEndTime, input[i].split(' ')[1]);
    }
    // console.log('lastEndTime', lastEndTime);

    //
    let startCondition = 0;
    //
    for (let endCondition = 0; endCondition<= lastEndTime; endCondition++){
        for(let i = 1; i <= caseCount; i++){
            const startTime = parseInt(input[i].split(' ')[0]);
            const endTime = parseInt(input[i].split(' ')[1]);
            //
            if(startCondition <= startTime && endCondition >= endTime){
                answerCase.push({startTime, endTime});
                answer++;
                startCondition = endTime;
                endCondition = endTime;
                break;
            }

            // 영역에 포함되는 케이스가 없음
            if(i === caseCount) {
                endCondition++;
            }
        }
    }
    // console.log('answerCase', answerCase);
    console.log(answer);
    // return answer;
}
solution(input)

// console.log(solution(input));
