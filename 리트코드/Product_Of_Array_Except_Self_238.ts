/**
 * @link https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param nums 
 */
function productExceptSelf(nums: number[]): number[] {
    
    const leftMultiplyArr = [1];
    for(let i = 1; i < nums.length; i++){
        leftMultiplyArr[i] = leftMultiplyArr[i-1] * nums[i-1];
    }

    const rightMultiplyArr = new Array(nums.length).fill(1);
    for(let i = nums.length-2; i>=0; i--){
        rightMultiplyArr[i] = rightMultiplyArr[i+1] * nums[i+1]; 
    }

    const answer : number[] = [];
    for(let i = 0; i< nums.length; i++){
        answer.push(leftMultiplyArr[i] * rightMultiplyArr[i])
    }


    return answer;
};


const nums = [1,2,3,4];
productExceptSelf(nums);