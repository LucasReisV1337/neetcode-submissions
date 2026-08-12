/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let newList = null
        let curr = head

        while (curr) {
            let next_node = curr.next
            curr.next = newList
            newList = curr
            curr = next_node
        }
        return newList
    }
}
