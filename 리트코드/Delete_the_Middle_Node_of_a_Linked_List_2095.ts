/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head === null) return null;

    let size = 0; 
    let cur: ListNode | null = head;
    while(cur !== null){
        cur = cur.next;
        size++;
    }

    const middleIdx = Math.floor(size / 2);
    if(middleIdx === 0) return new ListNode();

    let curListIdx = 0;
    cur = head;
    while(cur !== null){
        if(curListIdx === middleIdx -1 && cur.next){
            cur.next = cur.next.next;
            break;
        }
        cur = cur.next;
        curListIdx++;
    }
    return head;
};