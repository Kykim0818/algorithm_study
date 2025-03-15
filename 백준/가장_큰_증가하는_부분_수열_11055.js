/**
 * 완
 * @link https://www.acmicpc.net/problem/11055
 */
const fs = require('fs');

/**
 * a
 * b
*/
let multiLineInput = fs.readFileSync('/dev/stdin').toString().trim().split('\r\n');

const ARRAY_SIZE_INDEX = 0;
function solution( multiLineInput ){
    const arrSize = parseInt(multiLineInput[ARRAY_SIZE_INDEX]);
    const arr = multiLineInput[ARRAY_SIZE_INDEX+1].split(' ').map(Number);
    const memo = Array(arrSize).fill(0);
    
    for(let i = 0; i < arr.length; i++){
        if(i === 0) memo[i] = arr[i];
        //
        let sum = arr[i];
        for(let j = 0; j < i; j++){
            if(arr[j] < arr[i]){
                sum = Math.max(sum , memo[j] + arr[i])
            }
        }
        memo[i] = sum;
    }
    const answer = Math.max(...memo)
    console.log('answer', answer);
    return answer;
}


solution(multiLineInput);

// 10
// 1 100 2 50 60 3 5 6 7 8
// 1 100 61 50 60 3 5 6 7 8

