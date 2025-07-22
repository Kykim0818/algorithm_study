
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    const arr : number[] = [];
    let p = list1;
    while(p !== null){
        arr.push(p.val);
        p = p.next;
    }

    p = list2;
    while(p !== null){
        arr.push(p.val);
        p = p.next;
    }

    if(arr.length === 0) return null;

    arr.sort((a,b) => a-b);
    const answer = new ListNode(arr[0]);
    
    let cur = answer;
    for(let i = 1;  i< arr.length; i++){
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }



    // if(list1 === null) return list2;
    // if(list2 === null) return list1;

    // const mergeList = new ListNode();
    // let p1 : ListNode | null = list1;
    // let p2 : ListNode | null = list2;

    // while(p1 !== null || p2 !== null){
    //     if(p1 === null && p2 !== null){
    //         mergeList.next = new ListNode(p2.val);
    //         p2 = list2.next
    //     }

    //     if(p2 === null && p1 !== null){
    //         mergeList.next = new ListNode(p1.val);
    //         p1 = list2.next
    //     }

    //     if(p1 && p2){
    //         let cur1 = p1.val;
    //         let cur2 = p2.val;
    //         if(cur1 >= cur2){
    //             mergeList.next = new ListNode(cur2);
    //             p2 = list2.next
    //         }else{
    //             mergeList.next = new ListNode(cur1);
    //             p1 = list1.next
    //         }
    //     }
    // }
    console.log(answer);
    return answer;
};

// solve1
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const arr : number[] = [];
//     let p = list1;
//     while(p !== null){
//         arr.push(p.val);
//         p = p.next;
//     }

//     p = list2;
//     while(p !== null){
//         arr.push(p.val);
//         p = p.next;
//     }

//     if(arr.length === 0) return null;

//     arr.sort((a,b) => a-b);
//     const answer = new ListNode(arr[0]);
    
//     let cur = answer;
//     for(let i = 1;  i< arr.length; i++){
//         cur.next = new ListNode(arr[i]);
//         cur = cur.next;
//     }
//     console.log(answer);
//     return answer;
// };


// list1 = [1,2,4];
// list2 = [1,3,4];