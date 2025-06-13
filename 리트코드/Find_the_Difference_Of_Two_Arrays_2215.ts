

// TODO 함수로 정리해보기 
function findDifference(nums1: number[], nums2: number[]): number[][] {
    //
    const answer: number[][] = [[],[]];
    const [subArr1, subArr2] = answer;

    const noDuplicateNums1 = [...new Set<number>(nums1)];
    const noDuplicateNums2 = [...new Set<number>(nums2)];
    const num2Set = new Set<number>(nums2);

    const removeNums2Set = new Set<number>();
    for(let i = 0; i < noDuplicateNums1.length; i++){
        if(num2Set.has(noDuplicateNums1[i])){
            removeNums2Set.add(noDuplicateNums1[i]);
        }else{
            subArr1.push(noDuplicateNums1[i])
        }
    }

    for(let i = 0; i < noDuplicateNums2.length; i++){
        if(!removeNums2Set.has(noDuplicateNums2[i])) subArr2.push(noDuplicateNums2[i])
    }


    return answer;
}

// const nums1 = [1, 2, 3];
// const nums2 = [2, 4, 6];

// findDifference(nums1, nums2);
