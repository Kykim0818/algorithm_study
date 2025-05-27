/**
 * @link https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
 */


const word1 = 'abcd';
const word2 = 'pq';

function mergeAlternately(word1: string, word2: string): string {
    let answer = '';
    let pointer = 0;
    let word1End = false;
    let word2End = false;
    while((word1End && word2End) === false){
        if(!word1End && word1[pointer]){
            answer += word1[pointer];
        }else{
            word1End = true;
        }

        if(!word2End && word2[pointer]){
            answer += word2[pointer];
        }else{
            word2End = true;
        }
        pointer++;
    }
    console.log(answer);
    return answer

};


mergeAlternately(word1, word2);