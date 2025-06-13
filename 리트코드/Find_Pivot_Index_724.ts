function pivotIndex(nums: number[]): number {
    let pivotIndex = -1;
    // 
    let rightSum = 0;
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++){
        rightSum += nums[i];
    }

    for(let i = 0; i < nums.length; i++){
        rightSum -= nums[i];
        if(i > 0){
            leftSum += nums[i-1];
        }
        if(leftSum === rightSum) {
            pivotIndex = i;
            break;
        }
    }

    console.log(pivotIndex);
    return pivotIndex;
};

// const nums = [1,7,3,6,5,6];
// pivotIndex(nums);