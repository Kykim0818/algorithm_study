
// Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }


function pairSum(head: ListNode | null): number {
  if(head === null) return 0;
  const vals : number[] = [];
  let n = 0;
  while(head !== null){
    if(head.val !== 0){
        n++;
        vals.push(head.val)      
        head = head.next;
    }else{
        break;
    }
  }

  let maxTwinSum = 0;
  for(let i = 0; i < n / 2; i++){
    let curSum = vals[i] + vals[getTwin(i)];
    maxTwinSum = Math.max(curSum, maxTwinSum);
  }
  return maxTwinSum;

  function getTwin( index : number){
    return n - 1 - index;
  }
};

// twin n - 1 - index 