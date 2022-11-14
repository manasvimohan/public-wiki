class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]
        
        # Create Bucket
        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)
        
        # Searching top k
        res = []
        
        for i in range(len(freq) - 1, 0, -1): # -1 means in reverse, 0 is till first value
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
                    
"""
https://leetcode.com/problems/top-k-frequent-elements/

We have list of number and integer k
Find k most frequent numbers in list.

Complexity:
O(n)
O(n)

Concepts:
Bucket Sort

"""

