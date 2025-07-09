function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length-1;
  while(left < right){
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] < nums[mid+1]){
        left = mid + 1;;
    }else{
        right = mid;
    }
  }
  return left;
};

const nums = [1,2,1,3,5,6,4]

1,2,1,3,5,6,4
0 1 2 3 4 5 6
      l m   r
0 1 2 3 4 5 6      
        l   r
0 1 2 3 4 5 6      
        l m r
0 1 2 3 4 5 6
          l r      