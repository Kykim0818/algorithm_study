
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


function goodNodes(root: TreeNode | null): number {
    let answer = 0;
    if(root === null) return answer;
    answer++;   
    exploreNode(root, root.val);

    return answer

    function exploreNode( node : TreeNode, maxVal : number){
        if(node.left){
            let curMax = maxVal;
            if(maxVal <= node.left.val){
                curMax = node.left.val;
                answer++;
            }
            exploreNode(node.left , curMax);
        }

        if(node.right){
            let curMax = maxVal;
            if(maxVal <= node.right.val){
                curMax = node.right.val;
                answer++;
            }
            exploreNode(node.right , curMax);
        }
    }
};