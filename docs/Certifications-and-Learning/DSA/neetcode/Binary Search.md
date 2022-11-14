class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = l + ((r - l) // 2)  # (l + r) // 2 can lead to overflow in most languages. In python it does not happen.
            if nums[m] > target:
                r = m - 1
            elif nums[m] < target:
                l = m + 1
            else:
                return m
        return -1

"""
https://leetcode.com/problems/binary-search/
https://youtu.be/s4DPM8ct1pI

Problem:
List of nums given in sorted ascending order. And a target is given.
Find index of target in nums in O(log n)
Normal search is O(n), since Log n is needed, we do binary search/

Complexity:


Concepts:
Need two pointers.
Loop exit condition - while l<=r: default return -1
Find mid            - m = (l+r)//2 OR m = l + ((r-l)//2)
If larger           - r = m-1
If smaller          - l = m+1
Return              - m

"""

