class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1

        while l < r:
            curSum = numbers[l] + numbers[r]

            if curSum > target:
                r -= 1
            elif curSum < target:
                l += 1
            else:
                return [l + 1, r + 1]
                
"""
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Problem:
Given an array which is sorted. A target is given.
Find two numbers in array which add to target.
Condition is, index of first number should be before second number index.
Also, list index starts from 1, not 0 in result.
Each array has exactly one solution.
Same element can not be used twice.

Complexity:


Concepts:


"""

