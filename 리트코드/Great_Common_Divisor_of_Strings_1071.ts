/**
 * @link https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
 */

function gcdOfStrings(str1: string, str2: string): string {
    if(str2.length > str1.length) return '';

    let tmp : string[] = [];
    for(let i = 0; i < str2.length; i++){
        if(str1[i] === str2[i]) tmp.push(str2[i]);
        else break;
    }
    if(tmp.length === 0) return '';

    let isGetGCD = false;
    while(tmp.length > 0){
        if(isGetGCD) break;
        for(let i = 0; i < str1.length; i++){
            if(str1[i] !== tmp[i % tmp.length]) tmp.pop();
            if(i === str1.length-1) isGetGCD = true;
        }
    }
    console.log(tmp.join(''));
    return tmp.join('');
};

const str1 = 'ABABAB';
const str2 = 'ABAB'

gcdOfStrings(str1,str2);