class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for c in tokens:
            if c == "+":
                stack.append(stack.pop() + stack.pop())
            elif c == "-":
                a, b = stack.pop(), stack.pop()
                stack.append(b - a)
            elif c == "*":
                stack.append(stack.pop() * stack.pop())
            elif c == "/":
                a, b = stack.pop(), stack.pop()
                stack.append(int(b / a))
            else:
                stack.append(int(c))
        return stack[0]

"""
https://leetcode.com/problems/evaluate-reverse-polish-notation/

Problem:
We have + - * and /
Then we have a list with numbers and operators

tokens = ["2","1","+","3","*"] 
Output --> 9
Explanation: ((2+1)*3)=9

Complexity:
O(n)
O(n)

Concepts:


"""

