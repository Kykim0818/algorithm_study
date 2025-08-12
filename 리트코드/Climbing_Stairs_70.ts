function climbStairs(n: number): number {
    const memo = Array(n+1).fill(0);
    memo[1] = 1;
    memo[2] = 2;
    if(n <= 2) return memo[n];

    for(let i = 3; i <= n; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
};

// const n = 2;