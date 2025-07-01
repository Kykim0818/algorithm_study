function countBits(n: number): number[] {
    const answer : number[] = [];
    const binaryArr: string[] = [];
    for(let i = 0; i <= n; i++){
        binaryArr.push(i.toString(2))
    }

    for(let i = 0; i < binaryArr.length; i++ ){
        let cnt = 0;
        let cur = binaryArr[i];
        for(let j = 0; j< cur.length; j++){
            if(cur[j] === '1') cnt++;
        }
        answer.push(cnt)
    }
    return answer;
};





 