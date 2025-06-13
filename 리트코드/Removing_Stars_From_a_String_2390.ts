function removeStars(s: string): string {
    const stack: string[] = [];
    for (const ch of s) {
        if (ch === '*') stack.pop();
        else stack.push(ch);
    }

    const answer = stack.join('');
    return answer;
};

// const s = "leet**cod*e";
// removeStars(s);


// 1트시간초과
// function removeStars(s: string): string {
//     const inputArr = s.split('');
    
//     let opCnt = 0;
//     inputArr.forEach(value => {
//         if(value === '*') opCnt++;
//     })

//     for(let i = 0; i< opCnt; i++){
//         for(let j = 0; j < inputArr.length; j++){
//             if(inputArr[j] === '*') {
//                 inputArr.splice(j-1,2);
//                 break;
//             }
//         }
//     }

//     const answer = inputArr.join('');
//     return answer;
// };
