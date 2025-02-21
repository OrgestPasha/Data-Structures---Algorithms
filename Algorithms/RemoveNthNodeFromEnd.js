/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let curr = dummy;
  let length = 0;

  while (curr.next) {
    length++;
    curr = curr.next;
  }

  curr = dummy;
  for (let i = 0; i < length - n; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;

  return dummy.next;
};
