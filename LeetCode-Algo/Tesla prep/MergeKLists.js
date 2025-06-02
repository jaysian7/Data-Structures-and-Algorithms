/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return "";

    const arr = []; 

    for(const head of lists){
        let tempHead = head;
        while(tempHead) {
            arr.push(tempHead);
            tempHead = tempHead.next;
        }
    }

	// this effective functions like a priority queue...
    arr.sort((a,b) => a.val - b.val)
    for(let i = 0; i < arr.length - 1; i++) arr[i].next = arr[i+1];


    if(arr.length) {
        arr[arr.length-1].next = null;
        return arr[0] ;
    }

    return "";
};
