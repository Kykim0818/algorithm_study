
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function invertTree(root: TreeNode | null): TreeNode | null {
    if(root === null) return null;
    invert(root);
    return root;
    function invert(node : TreeNode){
        if(node.left === null && node.right === null) return;

        if(node.left){
            invert(node.left);
        }
        if(node.right){
            invert(node.right);
        }

        let tmp : TreeNode | null = null;
        tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        return;
    }
};


const root = [4,2,7,1,3,6,9];