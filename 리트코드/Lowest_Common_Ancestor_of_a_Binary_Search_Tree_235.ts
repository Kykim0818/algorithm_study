
// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(p === null || q === null) return null;
	const pathP = findRootPath(root, p.val);
	const pathQ = findRootPath(root, q.val);

    console.log(pathP);
    console.log(pathQ);

    let idx = 0;
    let curP = pathP[idx];
    let curQ = pathQ[idx];
    let answer: TreeNode | null = null;

    while(curP.val === curQ.val){
        idx++;
        curP = pathP[idx];
        curQ = pathQ[idx];

        if(curP === undefined || curQ === undefined){
            break;
        }
    }

    answer = pathP[idx-1];

    return answer;

    function findRootPath(root : TreeNode | null, target : number ){
        if(root === null) return [];
        let isFind = false;
        let path : TreeNode[] = [root];
        let cur : TreeNode | null = root;
        while(cur && isFind === false){
            if(cur.val === target){
                isFind = true;
            }else if(target < cur.val){
                if(cur.left){
                    path.push(cur.left);
                    cur = cur.left;
                }
            }else{
                if(cur.right){
                    path.push(cur.right)
                    cur = cur.right;
                }
            }
        }   
        return path;
    }
};

// const root = [6,2,8,0,4,7,9,null,null,3,5]
// const p = 2;
// const q = 8;


// 0 1 2 // 3 4 5 // 6 7 8 /// 

