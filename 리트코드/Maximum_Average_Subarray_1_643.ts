function findMaxAverage(nums: number[], k: number): number {
    let maxSum = 0;
    for(let i = 0; i < k; i++){
        maxSum += nums[i];
    }
    
    let currentSum = maxSum;
    for(let i = k; i < nums.length; i++){
        currentSum = currentSum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    const answer = parseFloat((maxSum / k).toFixed(5));

    console.log(answer);
    return answer;
};

const nums = [1,12,-5,-6,50,3];
const k = 4;
findMaxAverage(nums, k);