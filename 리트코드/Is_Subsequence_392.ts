function isSubsequence(s: string, t: string): boolean {
    let answer = false;
    let sPointer = 0;
    for(let i = 0; i < t.length; i++){
        if(s[sPointer] === t[i]) sPointer++;
    }
    if(sPointer === s.length) answer = true;

    return answer;
};

const s = 'abc';
const t = 'ahbgdc';

isSubsequence(s,t);