class Solution:
    def isValid(self, s: str) -> bool:
        Map = {")": "(", "]": "[", "}": "{"}
        stack = []

        for c in s:
            if c not in Map:
                stack.append(c)
                continue
            if not stack or stack[-1] != Map[c]:
                return False
            stack.pop()

        return not stack

"""
https://leetcode.com/problems/valid-parentheses/

# In video, solution is different.

Problem:
{} [] () are given in a string.
Check if given string is valid.

Complexity:
O(n)
O(n)

Concepts:
Make hashmap for pairs.
Use stacks.

"""

