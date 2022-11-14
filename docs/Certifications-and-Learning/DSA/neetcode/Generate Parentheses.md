class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack = []
        res = []

        def backtrack(openN, closedN):
            if openN == closedN == n:
                res.append("".join(stack))
                return

            if openN < n:
                stack.append("(")
                backtrack(openN + 1, closedN)
                stack.pop()
            if closedN < openN:
                stack.append(")")
                backtrack(openN, closedN + 1)
                stack.pop()

        backtrack(0, 0)
        return res

"""
https://leetcode.com/problems/generate-parentheses/

Problem:
Integer n is given.
We are given a parenthesis like ()
We need to create n pairs of parenthesis, and all combinations.
Only well formed allowed, meaning if open then should close.

Complexity:


Concepts:


"""

