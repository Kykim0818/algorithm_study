/**
 *  @link https://www.acmicpc.net/problem/1991
 */
const fs = require('fs');


/**
 * a
 * b
 */
let multiLineInput = fs.readFileSync('/dev/stdin').toString().trim().split('\r\n');

const NODE_COUNT_INDEX = 0;
const DEFAULT_ROOT= 'A';
function solution( multiLineInput){
    const nodeCnt = parseInt(multiLineInput[NODE_COUNT_INDEX]);
    const nodeTree = {};
    for(let i = 1; i <= nodeCnt; i++){
        const [root, left, right] = multiLineInput[i].split(' ');
        nodeTree[root] = {
            root,
            left,
            right
        }
    }
    // console.log('nodeTree', nodeTree)


    // 모아서 출력
    // inorder  left -> root -> right
    // postorder left -> right -> root
    const answer = [];

    answer.push(getPreOrder(nodeTree, DEFAULT_ROOT));
    answer.push(getInOrder(nodeTree, DEFAULT_ROOT));
    answer.push(getPostOrder(nodeTree, DEFAULT_ROOT));
    console.log(answer.join('\n'));
    return answer;
}

// preorder root -> left -> right
function getPreOrder( nodeTree, startNodeRoot){
    let answer = startNodeRoot;
    if(nodeTree[startNodeRoot].left !== '.') answer += getPreOrder( nodeTree, nodeTree[startNodeRoot].left);
    if(nodeTree[startNodeRoot].right !== '.') answer += getPreOrder( nodeTree, nodeTree[startNodeRoot].right);
    return answer;
}
// inorder  left -> root -> right
function getInOrder( nodeTree, startNodeRoot){
    let answer = '';
    if(nodeTree[startNodeRoot].left !== '.') answer += getInOrder( nodeTree, nodeTree[startNodeRoot].left);
    answer += startNodeRoot;
    if(nodeTree[startNodeRoot].right !== '.') answer += getInOrder( nodeTree, nodeTree[startNodeRoot].right);
    return answer;
}
// postorder left -> right -> root
function getPostOrder( nodeTree, startNodeRoot){
    let answer = '';
    if(nodeTree[startNodeRoot].left !== '.') answer += getPostOrder( nodeTree, nodeTree[startNodeRoot].left);
    if(nodeTree[startNodeRoot].right !== '.') answer += getPostOrder( nodeTree, nodeTree[startNodeRoot].right);
    answer += startNodeRoot;
    return answer;
}
solution(multiLineInput);
