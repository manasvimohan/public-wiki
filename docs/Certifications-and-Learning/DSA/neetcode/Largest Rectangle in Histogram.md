class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        stack = []  # pair: (index, height)

        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                index, height = stack.pop()
                maxArea = max(maxArea, height * (i - index))
                start = index
            stack.append((start, h))

        for i, h in stack:
            maxArea = max(maxArea, h * (len(heights) - i))
        return maxArea
        
"""
https://leetcode.com/problems/largest-rectangle-in-histogram/

Problem:
A list of integers. Each represent a bar height, and each item width 1.
Find max area rectangle.
Return rectangle area.

Complexity:


Concepts:
Like rain water in 2 pointer, but here we use stack.
So we use two pointer pairs in stack.
Enumerate used -- https://www.geeksforgeeks.org/enumerate-in-python/

"""

