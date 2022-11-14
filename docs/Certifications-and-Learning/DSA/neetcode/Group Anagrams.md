class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = collections.defaultdict(list)

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            ans[tuple(count)].append(s)
        return ans.values()
        
"""
https://leetcode.com/problems/group-anagrams/

We have list of strings.
Create a sublist of anagrams.

Complexity:
O(mn)

Concepts:
HashMap of each item
Two Loops
"""

