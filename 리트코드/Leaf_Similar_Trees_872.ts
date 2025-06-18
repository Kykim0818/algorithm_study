/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // leafnode 탐색
    const tree1Leafs = [];
    const tree2Leafs = [];
    findLeaf(root1, tree1Leafs);
    findLeaf(root2, tree2Leafs);
    
    console.log('1', tree1Leafs);
    console.log('2', tree2Leafs);
    let answer = true;
    for(let i = 0; i <tree1Leafs.length; i++){
        if(tree1Leafs[i] !== tree2Leafs[i]){
            answer = false;
            break;
        }
    }

    return answer;
    // 
    function findLeaf( tree : TreeNode | null, leafNode : number[]){
        
        if(tree === null || tree.val === 0) return;

        if(tree.left){
            findLeaf(tree.left, leafNode);
        }
        if(tree.right){
            findLeaf(tree.right, leafNode);
        }
        if(tree.left === null && tree.right === null){
            leafNode.push(tree.val);
        }
    }
};