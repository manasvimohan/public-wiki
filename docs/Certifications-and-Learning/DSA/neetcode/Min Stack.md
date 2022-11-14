class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]

"""
https://leetcode.com/problems/min-stack/

Problem:
Design stack which can pop, push, top and retrieve.
Input is list of functions like [push, pop, getmin etc]

Complexity:
O(1) implementation

Concepts:
Use two stacks for O(1)

"""

