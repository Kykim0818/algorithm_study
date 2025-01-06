const solution = (citations) => {
    citations.sort(function (a, b) {
        return a - b;
    });
    let answer = 0;
    for (let i = citations.length - 1; i >= 0; i--) {
        if (citations[i] > answer) answer++;
        else break;
    }
    return answer;
}
