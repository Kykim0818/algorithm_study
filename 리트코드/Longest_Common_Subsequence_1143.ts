function longestCommonSubsequence(text1: string, text2: string): number {
    const t1Length = text1.length;
    const t2Length = text2.length;

    const memo = Array.from(Array(t1Length + 1) , () => Array(t2Length + 1).fill(0));

    for(let i = 1; i<= text1.length; i++){
        for(let j = 1; j <= text2.length; j++){
            if(text1[i-1] === text2[j-1]){
                memo[i][j] = memo[i-1][j-1] + 1;
            }else{
                memo[i][j] = Math.max(memo[i-1][j], memo[i][j-1]);
            }
        }
    }
    return memo[t1Length][t2Length];
};

longestCommonSubsequence("abcde", "ace");