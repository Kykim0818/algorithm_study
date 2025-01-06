function solution(progresses, speeds) {
    let answer = [];
    let stack=[];
    
    for(let i=0;i<progresses.length;i++ ){
        stack.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let count=1;
    let maxNum=1;
    let isMax=false;
    while(stack.length!=0){
        let num = stack.shift()
        if(!isMax) {maxNum=num; isMax=true}
        if((stack.length===0) || (maxNum <stack[0]) ){
            answer.push(count);
            isMax=false;
            count=1;
            
        }else{
            count++;
        }
    }
    
    return answer;
}
