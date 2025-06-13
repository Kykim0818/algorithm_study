function asteroidCollision(asteroids: number[]): number[] {

    let answer : number[] = [];
    for(let i = 0 ; i < asteroids.length; i++){
        const position = asteroids[i];
        if(position > 0){
            answer.push(position);
        }else{
            const absPosition = Math.abs(position);
            let curIdx = answer.length-1;
            while(curIdx >= 0){
                if(answer[curIdx] < 0){
                    answer.push(position);
                    break;
                }else if(answer[curIdx] < absPosition){
                    answer.pop();
                    curIdx--;
                }else if(answer[curIdx] === absPosition){
                    answer.pop();
                    break;
                }else{
                    break;
                }
            }
            if(curIdx === -1) answer.push(position);
        }
    }
    return answer;

};

// const asteroids = [5,10,-5];
// asteroidCollision(asteroids);