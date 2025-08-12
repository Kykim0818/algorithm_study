/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        if(n <= 1) return n;

        // n은 무조건 bad version ? 
        if(isBadVersion(n-1) === false) return n;
        
        let left = 1;
        let right = n;
        while(true){
            let mid = Math.floor((left + right) / 2);
            if(isBadVersion(mid)){
                if(mid === 1 || isBadVersion(mid-1) === false) return mid;
                right = mid;
            }else{
                left = mid;
            }
        }
    }
};


// n = 5