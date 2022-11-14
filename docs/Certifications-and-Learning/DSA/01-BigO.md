# Big O

Runtime complexity or Time complexity --> Time takes in max load/ worst case
Space complexity --> Memory used in max load/ worst case

With algo with multiple loops and functions, we choose the largest O only, and drop remaining.
Eg If any loop has O(n^2), and others O(n), we choose O(n^2) instead of O(n + n^2)

# Time Complexity
## O(1) - Constant
Runs in constant time, like print("Hello")

## O(n) - Linear
Runs based on size of input.
Loop with i++ and addition subtractions based iterations

Two loops, independent from each other, not nested --> O(n+n) = O(2n)
Two nested loops, with i++ -- etc --> O(n*n) = O(n^2)

## O(n^2) - Quadratic
Two Nested Loops case.
For three nested loops its n^3
For 4 its n^4 ... and so on

## O(log n) - Logarithmic
When algo goes half half to tackle the whole problem, like in binary search.

## O(2^n) - Exponential
Exponential, opposite of Log n. 

# Space Complexity
Optimizing for space in a small watch is important.

O(1) space -- A simple loop with empty list
O(n) space -- A simple loop with itmes in list
O(n^2) space -- Check, I am making it up. A loop, which gives a result to store, and save the previous result too.


