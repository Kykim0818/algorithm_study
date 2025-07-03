
type RoadLink = [ from : number, to : number ]

function minReorder(n: number, connections: number[][]): number {
    let answer = 0;
    const GOAL = 0;
    const roadMap: Record<number, number[]> = {}
    const arrivalMap : Record<number, number[]> = {};
    const canGoGoalCities = [0];
    const queue: number[] = [];
    const visited = new Array(n).fill(false);
    // init
    //[[1,0],[1,2],[3,2],[3,4]]
    visited[GOAL] = true;
    connections.forEach(([from , to]) => {
        // 출발지가 GOAL이면 뒤집으면 도착 연결이됨
        if(from === GOAL){
            queue.push(to);
            answer++;
        }

        if(to === GOAL) {
            queue.push(from);
            canGoGoalCities.push(from);
        }

        let curList: number[] = [];
        if(roadMap[from]){
            curList = roadMap[from];
            curList.push(to);
        }else{
            roadMap[from] = [to];
        }

        if(arrivalMap[to]){
            curList = arrivalMap[to];
            curList.push(from);
        }else{
            arrivalMap[to] = [from];
        }

       
    })

    if(canGoGoalCities.length === n) return answer;

    for(let i = 0; i < queue.length; i++){
        const canGoGoalCity = queue[i];
        visited[canGoGoalCity] = true;

        // 뒤집으면 연결되는 도시후보들
        // canGo -> city 
        // city -> canGo
        let linked = roadMap[canGoGoalCity];
        if(linked){
            linked.forEach((city) => {
                if(visited[city] === false){
                    queue.push(city);
                    answer++;
                }
            })        
        }

        linked = arrivalMap[canGoGoalCity];
        if(linked){
            linked.forEach((city) => {
                if(visited[city] === false){
                    queue.push(city);
                }
            })        
        }
    }
    return answer;
};


const connections: RoadLink[] = [[0,1],[1,3],[2,3],[4,0],[4,5]];
const n = 6;

minReorder(n, connections);