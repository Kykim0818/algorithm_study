/**
 * Definition for singly-linked list.
 * 
 */


class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
      }
}

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null) return null;
    if(head.val === undefined) return new ListNode();
    
    let cur: ListNode | null = head;
    const headArr: number[] = [];
    while(cur !== null){
        headArr.push(cur.val);
        cur = cur.next;
    }
    if(headArr.length === 0) return new ListNode();

    const answer = new ListNode(headArr[headArr.length-1])
    cur = answer;
    for(let i = headArr.length-2; i >= 0 ; i--){
        cur.next = new ListNode(headArr[i]);
        cur = cur.next;
    }

    return answer;
};

const head = [1,2,3,4,5];
reverseList(head);