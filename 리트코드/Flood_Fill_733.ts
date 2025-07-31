function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const dirRow = [0,0,-1,1];
  const dirCol = [-1,1,0,0];
  
  const maxRow = image.length;
  const maxCol = image[0]?.length ?? 0;

  const oriColor = image[sr][sc];
  if(oriColor === color) return image;
  
  // 1
  const queue = [[sr,sc]];
  image[sr][sc] = color;

  // loop
  for(let i = 0; i < queue.length; i++){
    const [cr, cc] = queue[i];

    for(let j = 0; j < 4; j++){
        const [movRow, movCol] = [cr+dirRow[j], cc+dirCol[j]];
        if(movRow >= 0 && movCol >= 0 && movRow < maxRow && movCol < maxCol){
            if(image[movRow][movCol] === oriColor){
                image[movRow][movCol] = color;
                queue.push([movRow,movCol])
            }
        }
    }
  }
  
  console.log(image);
  return image
};


// const image = [[1,1,1],[1,1,0],[1,0,1]];
// const sr = 1;
// const sc = 1;
// const color = 2;