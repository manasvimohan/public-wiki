class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """

    def encode(self, strs):
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    """
    @param: str: A string
    @return: dcodes a single string to a list of strings
    """

    def decode(self, str):
        res, i = [], 0

        while i < len(str):
            j = i
            while str[j] != "#":
                j += 1
            length = int(str[i:j])
            res.append(str[j + 1 : j + 1 + length])
            i = j + 1 + length
        return res
        
 
"""
https://leetcode.com/problems/encode-and-decode-strings/

Problem:
Given - A list of strings.
Join all words to encode
Then create the list again from the encoded string; meaning decode.

Complexity:
O(n)

Concepts:
Nothing

"""

