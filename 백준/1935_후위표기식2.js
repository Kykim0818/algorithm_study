/**
 * @link https://www.acmicpc.net/problem/1935
 */
const fs = require('fs');

/**
 * a b
 */
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

/**
 * a
 * b
 */
// let multiLineInput = fs.readFileSync('/dev/stdin').toString().trim().split('\r\n');
// 제출용
let multiLineInput = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const NUMBER_COUNT_INDEX = 0;
const EXPRESSION_INDEX = 1;
function solution( multiLineInput){
    const alphabets = [
        'A','B','C','D','E',
        'F','G','H','I','J',
        'K','L','M','N','O',
        'P','Q','R','S','T',
        'U','V','W','X','Y',
        'Z'
    ]
    // 피연산자 개수
    const numCount = parseInt(multiLineInput[NUMBER_COUNT_INDEX]);
    const expression = multiLineInput[EXPRESSION_INDEX];
    
    const valueMap = new Map();
    for(i = 0; i < numCount; i++){
        valueMap.set(alphabets[i], parseInt(multiLineInput[i+2]));
    }
    // console.log('valueMap', valueMap);
    // console.log('input', input);

    const numbers = [];
    for(let i = 0; i < expression.length; i++){
        const char = expression[i];
        if(alphabets.includes(char)){
            numbers.push(valueMap.get(char));
        }else{
            //
            const second = numbers.pop();
            const first = numbers.pop();
            if(char === '+'){
                numbers.push(first + second);
            }else if(char === '-'){
                numbers.push(first - second);
            }else if(char === '*'){
                numbers.push(first * second);
            }else if(char === '/'){
                numbers.push(first / second);
            }

        }
    }
    console.log(Number.parseFloat(numbers[0]).toFixed(2));
}


solution(multiLineInput);

// (3 + 4) * 5는 후위표기식으로 3 4 + 5 *