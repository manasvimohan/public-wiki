class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(0, head)
        left = dummy
        right = head

        while n > 0:            # in video its --> while n > 0 and right:
            right = right.next
            n -= 1

        while right:
            left = left.next
            right = right.next

        # delete
        left.next = left.next.next  # Simply setting next to next pointer, which is essentially removing the next item.
        return dummy.next           # Return next to dummy, which is original head
        
"""
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
https://youtu.be/XVuQxVej6y8

Problem:
A link list is given. Remove the nth node, FROM THE END. not the beginning.
Return new linked list.
Only one pass allowed.

Complexity:
O(n)

Concepts:


"""

