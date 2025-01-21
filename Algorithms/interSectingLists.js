var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null; // If either list is empty, no intersection.

  let pointerA = headA; // Start at the head of list A.
  let pointerB = headB; // Start at the head of list B.

  // Keep moving both pointers one step at a time.
  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB; // If pointerA reaches the end, switch to headB.
    pointerB = pointerB ? pointerB.next : headA; // If pointerB reaches the end, switch to headA.
  }

  return pointerA; // Either the intersection node or null (if no intersection).
};
