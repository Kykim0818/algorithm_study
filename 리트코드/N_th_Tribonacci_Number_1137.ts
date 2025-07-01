function tribonacci(n: number): number {
    const memo : number [] = Array(n+1).fill(0);
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 1;
    if( n <= 2) return memo[n];
    for(let i = 3; i<= n; i++){
        memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
    }
    return memo[n];
};
