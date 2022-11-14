class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        pts = []
        for x, y in points:
            dist = (abs(x - 0) ** 2) + (abs(y - 0) ** 2)
            pts.append([dist, x, y])

        res = []
        heapq.heapify(pts)
        
        for i in range(k):
            dist, x, y = heapq.heappop(pts)
            res.append([x, y])
        return res

"""
https://leetcode.com/problems/k-closest-points-to-origin/

Problem:
A list of Points are given.
Find the "k" points closest to the origin, ie (0,0)
We always have single answer, will not be any tie.

Complexity:


Concepts:
Create a heap from list using some required calculations.
Then perform heappop as per logic.

"""

