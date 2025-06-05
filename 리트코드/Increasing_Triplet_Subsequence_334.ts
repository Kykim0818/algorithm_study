function increasingTriplet(nums: number[]): boolean {
    let answer = false;
    let first = Infinity;
    let second = Infinity;
    
    nums.forEach((num) => {
        if(num <= first){
            first = num;
        }else if(num <= second){
            second = num;
        }else{
            answer = true;
        }
    })


    return answer;

};

const nums = [1,2,3,4,5];