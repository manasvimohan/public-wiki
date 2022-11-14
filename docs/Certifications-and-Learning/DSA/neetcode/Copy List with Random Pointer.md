"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    def copyRandomList(self, head: "Node") -> "Node":
        oldToCopy = {None: None}

        cur = head
        while cur:
            copy = Node(cur.val)
            oldToCopy[cur] = copy
            cur = cur.next
        cur = head
        while cur:
            copy = oldToCopy[cur]
            copy.next = oldToCopy[cur.next]
            copy.random = oldToCopy[cur.random]
            cur = cur.next
        return oldToCopy[head]

"""
https://leetcode.com/problems/copy-list-with-random-pointer/
https://youtu.be/5Y2EiZST97Y

Problem:
A linked list LL is given.
LL has an extra node with a random pointer, which points to any node with no pattern.
Return a DEEP COPY of LL.

Complexity:
O(n)

Concepts:
Two passes needed.
Tracking using a hashmap of random node pointer.

"""

