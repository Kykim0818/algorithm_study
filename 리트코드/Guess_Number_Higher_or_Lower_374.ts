/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * 
 */

function guessNumber(n: number): number {
    if(guess(n) === 0) return n;
    return findPick(1,n);
    
    
    function findPick(min : number ,max : number){
        const mid = Math.floor((min+max) / 2);
        const guessRes = guess(mid);
        console.log('mid',mid)
        console.log('res',guessRes)
        if(guessRes === -1) return findPick(min, mid);
        else if (guessRes === 1) return findPick(mid, max);
        else return mid;
    }
};
