# Contents

- [Dynamic Programming](#Dynamic Programming)
- [Very Basics](#Very Basics)
- [Methodology](#Methodology)
- [Optemise a Fibonacci function](#Optemise a Fibonacci function)
- [grid Traveller](#grid Traveller)
    - [brute force](#grid Traveller#brute force)
    - [Memoize](#grid Traveller#Memoize)

# Dynamic Programming

# Very Basics
https://www.youtube.com/watch?v=oBt53YbR9Kk

Very Good explanation - https://www.youtube.com/watch?v=5dRGRueKU3M

Recursion is kind of the CORE to it.
We decompose larger problem into smaller and cache result in each step (memoization).
Or use tabulation to solve.
Thing problems in terms of trees


# Two Ways
Memoization - Store values
Tabulation -  Make tables out

# Methodology
1. Make it work by bruteforce:
    1. Visualise as tree
    2. Implement with recursion
    3. test it for various cases
2. Make it efficient using memoization:
    1. Add memo dict
    2. add new base case to return memo values
    3. store return values into the memo

def dib(n):
    if n<=1:
        return
    
    return dib(n-1)             # O(n)
    OR
    return dib(n-1) + dib(n-1)  # O(2^n)
    OR
    return dib(n-1) 
    return dib(n-1) 
    return dib(n-1)             # O(3^n)
    
Notice if we call:
dib(n) once, its O(n)       <-- 1d like list
dib(n) twice, its O(2^n)    <-- 2d like list
dib(n) thrice, its O(3^n)   <-- 3d like list

a fib function calls twice

# Optemise a Fibonacci function
https://youtu.be/oBt53YbR9Kk?t=1933

Makes O(2^n) to O(n)
From exponantial to linear !! WOW!

1 1 2 3 5 8 13 21

memo = {}

def fib(n, memo):
    if n in memo:
        return memo.n
    if n<=2:
        return 1
    memo.n = fib(n-1, memo) + fib(n-2, memo)
    return memo.n

x=fib(5, memo)
print(x)

# grid Traveller
https://youtu.be/oBt53YbR9Kk?t=2956

## brute force
def gt(m,n):
    if m==1 and n==1:
        return 1
    if m==0 or n==0:
        return 0
    return gt(m-1, n) + gt(m, n-1) # Moving in m direction is m-1,n and for n direction is m, n-1
    
## Memoize
memo = {}

def gt(m,n, memo):

    key = m + "," + n
    if key in memo:
        return memo[key]
        
    if m==1 and n==1:
        return 1
    if m==0 or n==0:
        return 0
    
    memo[key] =  gt(m-1, n) + gt(m, n-1)
    return memo[key]
 
# Find if given items in list adds to the given target
https://youtu.be/oBt53YbR9Kk?t=4225

1. Make the root as the target
2. root - each item gives difference in the leaf
3. if leaf becomes zero, we found our answer

n = 7
l = [5,3,4,7]

def p(n,l):
    if n == 0:
        return True
    if n < 0:
        return False
    
    for each in l:
        m = n - each
        if p(m, l) == True:
            return True
            
    return False
    
    
    
    
    
    
    
    
    
    
    
