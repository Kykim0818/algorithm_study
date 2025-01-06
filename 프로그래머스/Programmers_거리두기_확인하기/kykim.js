function solution(places) {
    const answer = [];
    // 1 init 
    places.forEach(place => {
        // 문제 start 
        const map = [[], [], [], [], []]
        const personPointArray = [];
        map.forEach((_eachRow, idx) => {
            map[idx] = [0, 0, 0, 0, 0];
        })
        // 
        place.forEach((eachRow, index) => {
            for (let i = 0; i < eachRow.length; i++) {
                const what = eachRow[i];
                if (what === 'P') {
                    personPointArray.push({
                        row: index,
                        col: i
                    })
                }
                map[index][i] = what;
            }
        })
        //
        let checkVal = 1;
        for (let i = 0; i < personPointArray.length; i++) {
            if (checkPerson(personPointArray[i], map) === 0) {
                console.log('map', map);
                console.log('tt', personPointArray[i]);
                checkVal = 0;
                break;
            }
        }
        answer.push(checkVal);
    })



    return answer;
}
// -1 -1 -1  0  0  1  1  1
//  0  1 -1 1  -1  0   1 -1 
const dRow = [-1, -1, -1, 0, 0, 1, 1, 1, 2, -2, 0, 0];
const dCol = [0, 1, -1, 1, -1, 0, 1, -1, 0, 0, 2, -2];
const checkPerson = (point, map) => {
    let ret = 1;
    const { row, col } = point;
    console.log('point', point);
    for (let i = 0; i < dRow.length; i++) {
        const cR = row + dRow[i];
        const cC = col + dCol[i];
        if (row === 1 && col === 4) {
            console.log('ddd1', cR, cC);
        }
        // 경계값 
        if (checkBorder({ row: cR, col: cC })) continue;
        const val = map[cR][cC];
        if (val === 'O' || val === 'X') continue;
        // P 일 경우 
        const dist = getDist({ row, col }, { row: cR, col: cC });

        if (dist === 1) {
            return 0;
        } else {
            // 2 이면 
            const dR = dRow[i];
            if (checkMap([cR, cC], dR, map, 'R')) return 0;
            const dC = dCol[i];
            if (checkMap([cR, cC], dC, map, 'C')) return 0;
        }
    }
    return ret;
}
// dist 가 2일떈 체크값들이 전부 파티션이어야 거리두기가 된다.
const checkMap = (cur, dist, map, dir) => {
    let ret = false;
    // cur = [2, 2]  -1 1 , R
    if (dir === 'R') {
        if (dist > 0) {
            for (let i = dist; i <= dist; i++) {
                if (checkBorder({ row: cur[0] + i, col: cur[1] })) continue;
                if (checkSame({ row: cur[0], col: cur[1] }, { row: cur[0] + i, col: cur[1] })) continue;
                const tmp = map[cur[0] + i][cur[1]];
                if (tmp === 'P' || tmp === 'O') ret = true;
            }
        }
        if (dist < 0) {
            for (let i = dist; i >= dist; i--) {
                if (checkBorder({ row: cur[0] + i, col: cur[1] })) continue;
                if (checkSame({ row: cur[0], col: cur[1] }, { row: cur[0] + i, col: cur[1] })) continue;
                const tmp = map[cur[0] + i][cur[1]];
                if (tmp === 'P' || tmp === 'O') ret = true;
            }
        }
    }
    if (dir === 'C') {
        if (dist > 0) {
            for (let i = dist; i <= dist; i++) {
                if (checkBorder({ row: cur[0], col: cur[1] + i })) continue;
                if (checkSame({ row: cur[0], col: cur[1] }, { row: cur[0], col: cur[1] + i })) continue;
                const tmp = map[cur[0]][cur[1] + i];
                if (tmp === 'P' || tmp === 'O') ret = true;
            }
        }
        if (dist < 0) {
            for (let i = dist; i >= dist; i--) {
                if (checkBorder({ row: cur[0], col: cur[1] + i })) continue;
                if (checkSame({ row: cur[0], col: cur[1] }, { row: cur[0], col: cur[1] + i })) continue;
                const tmp = map[cur[0]][cur[1] + i];
                if (tmp === 'P' || tmp === 'O') ret = true;
            }
        }
    }
    return ret;
}
const checkBorder = (point) => {
    return (point.row < 0 || point.row > 4 || point.col < 0 || point.col > 4)
}
const checkSame = (point1, point2) => {
    return (point1.row === point2.row && point1.col === point2.col)
}
const getDist = (point1, point2) => {
    return Math.abs(point1.row - point2.row) + Math.abs(point1.col - point2.col)
}
const places =
    [
        //["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
        //["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
        ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
        //["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
        //["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
    ]

console.log(solution(places));