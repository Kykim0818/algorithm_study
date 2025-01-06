function solution(N, road, K) {
    const dist= new Array(N+1).fill(Infinity);
    const adj=Array.from({length:N+1},()=>[]);
    const q = [{to:1,time:0}];
    
    road.forEach(([from,to,weight])=>{
        adj[from].push({to:to,time:weight});
        adj[to].push({to:from,time:weight});0
    })
    dist[1]=0;
    
    while(q.length){
        let {to,time}=q.pop();
        adj[to].forEach(next=>{
            if(dist[to]+next.time<dist[next.to]){
                dist[next.to]=dist[to]+next.time;
                q.push(next);
            }
        })
    }
    return dist.filter(num=>num<=K).length;
}
