
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


function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return true;
    if(findDepth(root , 1) === -1) return false;
    return true;

    //
    function findDepth(tree : TreeNode | null, curDepth : number) : number{
        if(tree === null) return curDepth - 1;
        const leftDepth = findDepth(tree.left , curDepth + 1);
        const rightDepth = findDepth(tree.right , curDepth + 1);
        if(leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1){
            return -1;
        }
        return Math.max(leftDepth, rightDepth);
    }
};