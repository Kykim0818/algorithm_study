
const input = [1,8,6,2,5,4,8,3,7];

function maxArea(height: number[]): number {
    let area = 0;
    let left = 0;
    let right = height.length-1;

    while(left < right){
        const width = right - left;
        const curHeight = Math.min(height[right], height[left]);
        area = Math.max(area , width * curHeight);
        
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    console.log(area);
    return area;
};

maxArea(input);