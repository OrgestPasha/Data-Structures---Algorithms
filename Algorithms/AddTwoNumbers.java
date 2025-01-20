/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0); // Dummy node to simplify result list construction
        ListNode current = dummy;
        int carry = 0;

        while (l1 != null || l2 != null) {
            int val1 = (l1 != null) ? l1.val : 0; // Value from l1 or 0 if l1 is null
            int val2 = (l2 != null) ? l2.val : 0; // Value from l2 or 0 if l2 is null

            int sum = val1 + val2 + carry;
            carry = sum / 10; // Calculate carry for the next iteration
            current.next = new ListNode(sum % 10); // Add the digit to the result list
            current = current.next;

            // Move to the next nodes in l1 and l2 if they exist
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
        }

        // If there's a carry remaining, add it as a new node
        if (carry > 0) {
            current.next = new ListNode(carry);
        }

        return dummy.next; // Skip the dummy node and return the actual result list
    }
}