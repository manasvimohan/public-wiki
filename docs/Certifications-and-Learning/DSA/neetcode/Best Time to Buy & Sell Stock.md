class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0

        l = 0
        for r in range(1, len(prices)):
            if prices[r] < prices[l]:
                l = r
            res = max(res, prices[r] - prices[l])
        return res
        
"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Problem:
A list of prices. Make one transaction for max profit.

Complexity:


Concepts:


"""


