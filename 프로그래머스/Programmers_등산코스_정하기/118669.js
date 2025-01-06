function solution(n, paths, gates, summits) {
    // 
    summits.sort();
    var answer = [];

    const newMaps = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    paths.forEach((path) => {
        const start = path[0];
        const end = path[1];
        newMaps[start][end] = path[2];
        newMaps[end][start] = path[2];
    })
    console.table(newMaps);

    let maxIntensity = 0;

    for (let i = summits.length - 1; i >= 0; i++) {
        // gate 발견 하면 끝  
        let start = summits[i];
        // 
        const q = [];
        for (let j = 1; j <= n; j++) {
            if (newMaps[start][j] === 0) continue;
            q.push(j);
        }

        for (let j = 0; j < q.length; j++) {
            q[j]
        }


    }


    return answer;
}

const n = 6;
const paths = [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]];
const gates = [1, 3];
const summits = [5];

solution(n, paths, gates, summits);