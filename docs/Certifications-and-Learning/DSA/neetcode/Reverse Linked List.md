# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    # Solution 1 - Loop O(n) time and O(1) space
    def reverseList(self, head: ListNode) -> ListNode:
        prev, curr = None, head

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
    
    # Solution 2 - Recursive O(n) time and space
    def reverseList(self, head: ListNode) -> ListNode:
        if not head:
            return None
        newHead = head
        if head.next:
            newHead = self.reverseList(head.next)
            head.next.next = head
        head.next = None
        
        return newHead

"""
https://leetcode.com/problems/reverse-linked-list/

Problem:


Complexity:
O(n)
O(1)

Concepts:


"""

