
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function hasCycle(head: ListNode | null): boolean {
    if(head === null) return false;
    const nodeSet = new Set<ListNode>();
    let cur : ListNode | null = head;
    while(cur && cur !== null){
        if(nodeSet.has(cur)){
            return true;
        }else{
            nodeSet.add(cur);
            cur = cur.next;
        }
    }
    return false;
};

const head = [3,2,0,-4];
const pos = 1; 