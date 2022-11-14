class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        
        # Get row and col length
        ROWS, COLS = len(grid), len(grid[0])
        
        # Define hash or hashset
        visit = set()
        
        # Define DFS or BFS
        def dfs(r, c):
        
            # Always define base case for DFS recursive function.
            # Meaning, when to not do anything.
            if (
                r < 0                   # If Row is -ve
                or r == ROWS            # If we are at final row
                or c < 0                # If Col is -ve
                or c == COLS            # If we are at final col
                or grid[r][c] == 0      # If we are water
                or (r, c) in visit      # If we already visited  
            ):
                return 0
                
            # Add visited to hashset.
            # If none of above case, add to hashset
            visit.add((r, c))
            
            # Return the recursive in all four directions
            # Remove () from start and end if does not work.
            return (1 + dfs(r + 1, c) +     # move down since x+1
                        dfs(r - 1, c) +     # move up since x-1
                        dfs(r, c + 1) +     # move right since y+1
                        dfs(r, c - 1))      # move left since y-1
        
        # The final logic output as per the question.
        area = 0
        for r in range(ROWS):
            for c in range(COLS):
                area = max(area, dfs(r, c))
        return area
        
"""
https://leetcode.com/problems/max-area-of-island/
https://youtu.be/iJGr1OtmH0c

Problem:
1 land and 0 water.
Find the island with max area. Or in other word the largest island.

Complexity:
O(m*n) time and space where m and n is grid size.

Concepts:
Similar to number of island.
Apply DFS.
Use hashset to keep track of visited.

"""

