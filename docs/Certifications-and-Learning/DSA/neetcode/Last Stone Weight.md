class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones] # python has only min heap, no max heap, hence need to multiply each item with -1
        heapq.heapify(stones)

        while len(stones) > 1:
            first = heapq.heappop(stones)
            second = heapq.heappop(stones)
            if second > first:
                heapq.heappush(stones, first - second)

        stones.append(0)
        return abs(stones[0])

"""
https://leetcode.com/problems/last-stone-weight/

Problem:


Complexity:


Concepts:


"""

