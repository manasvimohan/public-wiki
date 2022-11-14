class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        res = 0

        while l < r:
            res = max(res, min(height[l], height[r]) * (r - l))
            if height[l] < height[r]:
                l += 1
            elif height[r] <= height[l]:
                r -= 1
        return res
        
"""
https://leetcode.com/problems/container-with-most-water/

Problem:
List given with positive heights.
Return two index of heights, which has maximum area.

Complexity:
O(n)

Concepts:
Item value, which is height * difference of index of two items is area.
Maximising this.

"""

