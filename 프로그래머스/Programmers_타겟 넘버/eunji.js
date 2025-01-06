function solution(numbers, target) {
    let q=[];
    let count=0;
    
    q.push({num:numbers[0],index:0});
    q.push({num:-numbers[0],index:0});
    let ii=0;
    
    while(ii<q.length){
        // let next=q.shift();
        let next=q[ii++];
        let nextNum=next.num;
        let nextIndex=next.index;
        
        if(nextIndex===numbers.length-1){
            if(nextNum===target) count++;
            continue;
        }
        q.push({num:nextNum+numbers[nextIndex+1],index:nextIndex+1});
        q.push({num:nextNum-numbers[nextIndex+1],index:nextIndex+1});
             
    }
    return count;
