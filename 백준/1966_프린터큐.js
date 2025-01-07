/**
 * @link https://www.acmicpc.net/problem/1966
 */
const fs = require('fs');
/**
 * a
 * b
 */
let multiLineInput = fs.readFileSync('/dev/stdin').toString().trim().split('\r\n');

const CASE_COUNT_INDEX = 0;
function solution( multiLineInput){
    // console.log('multiLineInput', multiLineInput);
    const caseCount = parseInt(multiLineInput[CASE_COUNT_INDEX]);
    for(let testCaseNum = 1; testCaseNum <= caseCount; testCaseNum++){
        const firstLine = multiLineInput[(2 * testCaseNum -1)].split(" ");
        const docsCount = parseInt(firstLine[0]);
        const targetDocsIdx = parseInt(firstLine[1]);

        // console.log('docsCount', docsCount);
        // console.log('targetDocsIdx', targetDocsIdx);

        const docs = multiLineInput[(2 * testCaseNum)].split(' ').map((val) => parseInt(val));
        const docsWithIdx = docs.map((priority, index) => ({ p : priority, i: index}));
        // 정렬
        docs.sort();
        
        const printResult = [];

        let maxP = docs[docs.length-1];
        for(let i = 0; i < docsWithIdx.length; i++){
            const p = docsWithIdx[i].p;
            if(p < maxP){
                docsWithIdx.push(docsWithIdx.shift());
            }else{
                printResult.push(docsWithIdx.shift());
                docs.pop();
                maxP = docs[docs.length-1];
            }
            i -= 1;
        }
        for(let i = 0; i < printResult.length; i++){
            if(printResult[i].i === targetDocsIdx){
                console.log(i+1);
            }
        }
    }
}


solution(multiLineInput);
