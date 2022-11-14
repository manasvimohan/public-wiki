class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLS = len(matrix), len(matrix[0])

        top, bot = 0, ROWS - 1
        while top <= bot:
            row = (top + bot) // 2
            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bot = row - 1
            else:
                break

        if not (top <= bot):
            return False
            
        row = (top + bot) // 2      # Values comes from above loop
        l, r = 0, COLS - 1
        while l <= r:
            m = (l + r) // 2
            if target > matrix[row][m]:     # Row value used from above loop
                l = m + 1
            elif target < matrix[row][m]:
                r = m - 1
            else:
                return True
        return False
        
"""
https://leetcode.com/problems/search-a-2d-matrix/
https://youtu.be/Ber2pi2C0j0

Problem:
Give 2d matrix, list of list. Each row is sorted, and last value of prev row is less than first val of next row. 
Find a given target, return true or false based on does exist or not.

Complexity:
O(Log m + Log n) where m and n are rows col 

Concepts:
Binary search on rows.
Binary search on the final selected row.

"""

