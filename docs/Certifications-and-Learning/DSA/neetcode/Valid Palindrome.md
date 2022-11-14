class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            # Skipping non alphanumeric
            while l < r and not self.alphanum(s[l]):
                l += 1
            while l < r and not self.alphanum(s[r]):
                r -= 1
            # Comparing right item with left
            if s[l].lower() != s[r].lower():
                return False
            # Move pointers left and right
            l += 1
            r -= 1
            
        # If code completes then true
        return True

    # Could write own alpha-numeric function
    def alphanum(self, c):
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )
        
"""
https://leetcode.com/problems/valid-palindrome/

Problem:
Given a string, check palindrom, meaning reverse is same as string.
Ignore case, and consider alphanumeric only. Ignore + ; . etc

Complexity:


Concepts:
ord() is used. 
isalnum() can be used. not used in solution. isalnum() returns bool if alphanumeric.

# Simple solution - But not efficient
newStr = ""
for c in string:
    if c.isalnum():
        newStr += c.lower()
return newStr == newStr[::-1]

"""

