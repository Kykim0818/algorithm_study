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
    const meetingTimes = [];
    for(let i = 1; i <= caseCount; i++){
        const inputCase = input[i].split(' ');
        meetingTimes.push([parseInt(inputCase[0]), parseInt(inputCase[1])]);
    }

    //끝나는 시간이 빠른 순서 기준으로 sort
    meetingTimes.sort((aTime, bTime) => {
        const aStartTime = aTime[0];
        const bStartTime = bTime[0];
        const aEndTime = aTime[1];
        const bEndTime = bTime[1];

        if(aEndTime < bEndTime){
            return -1;
        }
        if(aEndTime > bEndTime){
            return 1;
        }
        if(aEndTime === bEndTime){
            if(aStartTime < bStartTime) return -1;
            return 1;
        }
        return 0;
    })
    //
    let startCondition = 0;
    for(let i = 0; i < meetingTimes.length; i++){
        const startTime = meetingTimes[i][0];
        const endTime = meetingTimes[i][1];
        if(startCondition <= startTime || startTime === endTime){
            answer++;
            startCondition = endTime;
        }
    }


    console.log(answer);
    // return answer;
}
solution(input)

// console.log(solution(input));

/**
 * 2
1 1
0 1
2
 */