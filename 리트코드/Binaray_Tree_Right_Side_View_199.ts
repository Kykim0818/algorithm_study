/**
 * Definition for a binary tree node.
*/

function rightSideView(root: TreeNode | null): number[] {
    if(root === null) return [];

    let queue : TreeNode[][]= [[root]];
    for(let i = 0; i < queue.length; i++){
        const curLevel = queue[i];
        const nextLevel: TreeNode[] = [];
        for(let j = 0; j < curLevel.length; j++){
            const curLeaf = curLevel[j];
            if(curLeaf.left) nextLevel.push(curLeaf.left);
            if(curLeaf.right) nextLevel.push(curLeaf.right);
        }
        if(nextLevel.length > 0) queue.push(nextLevel);
    }

    const answer : number[] = [];
    for( let level = 0; level < queue.length; level++){
        const curLevel = queue[level];
        answer.push(curLevel[curLevel.length-1].val);
    }

    return answer;
}