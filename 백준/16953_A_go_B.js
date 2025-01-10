/**
 * @link https://www.acmicpc.net/problem/16953
 */
const fs = require('fs');

/**
 * a b
 */
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution( input){
    
    console.log('input', input);
    const initNum = parseInt(input[0]);
    const goalNum = parseInt(input[1]);

    let answer = -1; 
    const bfs = [{num : initNum, count : 0}];
    while(bfs.length != 0){
        const { num , count } = bfs.shift();
        // 1
        const res1 = calc1(num);
        if(res1 === goalNum){
            answer = count + 2;
        }else{
            if(res1 < goalNum){
                bfs.push({num : res1 , count : count+1})
            }
        }
        const res2 = calc2(num);
        if(res2 === goalNum){
            answer = count + 2;
        }else {
            if(res2 < goalNum){
                bfs.push({num : res2 , count : count+1})
            }
        }
    }
    console.log(answer);
    return answer;
}
function calc1( num){
    return num * 2;
}
function calc2( num){
    return num * 10 + 1;
}


solution(input);
