var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head; // Edge cases

  // Step 1: Find length and tail
  let length = 1,
    curr = head;
  while (curr.next) {
    curr = curr.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head; // No rotation needed

  // Step 2: Connect tail to head (circular linked list)
  curr.next = head;

  // Step 3: Find new tail (length - k steps from start)
  let newTail = head;
  for (let i = 1; i < length - k; i++) {
    newTail = newTail.next;
  }

  // Step 4: Set new head and break the cycle
  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};
