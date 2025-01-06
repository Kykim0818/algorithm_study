function solution(citations) {
    citations.sort((a,b)=>b-a);
    let answer=citations.length;
    for(let i=0;i<citations.length;i++){
        if(i+1>=citations[i]) {
            if(i>citations[i]) return i;
            else return citations[i];
        }
    }
    return answer;
}
