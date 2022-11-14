# Contents

- [Intro](#Intro)
- [Array and Hashing](#Array and Hashing)
- [Two Pointers](#Two Pointers)
- [Sliding Window](#Sliding Window)
- [Stack](#Stack)
- [Binary Search](#Binary Search)
- [Linked List](#Linked List)
- [Trees](#Trees)
- [Tries](#Tries)
- [Heap/ Priority Que](#Heap/ Priority Que)
- [Backtracking](#Backtracking)
- [Graphs](#Graphs)
- [Advanced Graph](#Advanced Graph)
- [1-D Dynamic Programming](#1-D Dynamic Programming)
- [2-D Dynamic Programming](#2-D Dynamic Programming)
- [Greedy Approach](#Greedy Approach)
- [Intervals](#Intervals)
- [Math and Geometry](#Math and Geometry)
- [Bit Manipulation](#Bit Manipulation)

# Intro
List of 150 Questions that cover all topics and give you the idea.
Should complete all.

All Solutions - https://github.com/neetcode-gh/leetcode/tree/main/python

# Array and Hashing
Gives good idea of how to use loops.
Creating hashmaps as result usually.

[Contains Duplicate](Contains Duplicate.md)
[Valid Anagram](Valid Anagram.md)
[Two Sum](Two Sum.md)
[Group Anagrams](Group Anagrams.md)
[Top K Frequent Elements](Top K Frequent Elements.md)
[Product of Array Except Self](Product of Array Except Self.md)
[Valid Sudoku](Valid Sudoku.md)
[Encode and Decode Strings](Encode and Decode Strings.md)
[Longest Consecutive Sequence](Longest Consecutive Sequence.md)

# Two Pointers
Usually used, when reducing O(n^2) complexity to O(n).
Helpful in sorted lists, kindof.
When hashmap based problems are to be solved with better complexity.

Generally, make two pointers left-start and right-end.
Then, create increment and decrement conditions of pointers.
Make calculations in between, updating some dict or var.

Here left initialised to 0 of list, before loop.
right initialised to -1 of list, meaning end. before loop.

[Valid Palindrome](Valid Palindrome.md)
[Two Sum II](Two Sum II.md)
[3Sum](3Sum.md)
[Container with Most Water](Container with Most Water.md)
[Trapping Rain Water](Trapping Rain Water.md)

# Sliding Window
Like two pointers, but this time pointer do not converge from left and right.
Rather the two pointers move together, right moving faster based on conditions.
Here left is initialised before loop.
right is initialised inside loop.

[Best Time to Buy & Sell Stock](Best Time to Buy & Sell Stock.md)
[Longest Substring Without Repeating Characters](Longest Substring Without Repeating Characters.md)
[Longest Repeating Character Replacement](Longest Repeating Character Replacement.md)
Permutation in String	
Minimum Window Substring	
Sliding Window Maximum

# Stack
Usually does not have loops.
Recursion sometimes.
A lot of if elses are here.
When traversing left to right, and in every decision only last value is considered.

[Valid Parentheses](Valid Parentheses.md)
[Min Stack](Min Stack.md)
[Evaluate Reverse Polish Notation](Evaluate Reverse Polish Notation.md)
[Generate Parentheses](Generate Parentheses.md)
Daily Temperatures
Car Fleet
[Largest Rectangle in Histogram](Largest Rectangle in Histogram.md)

# Binary Search
[Binary Search](Binary Search.md)
[Search a 2D Matrix](Search a 2D Matrix.md)
[Koko Eating Bananas](Koko Eating Bananas.md)
Search Rotated Sorted Array
Find Minimum in Rotated Sorted Array
Time Based Key-Value Store
[Find Median of Two Sorted Arrays](Find Median of Two Sorted Arrays.md)

# Linked List
Not sure; cant see pattern for now.
Very weird, learn more from youtube.
Imagine this way --> You only have access to head in linked list.
Everything else is computed, nth, goining anywhere, removing, reversing etc

Many design questions and not only algo questions

[Reverse Linked List](Reverse Linked List.md)
[Merge Two Linked Lists](Merge Two Linked Lists.md)
[Reorder List](Reorder List.md)
[Remove Nth Node from End of List](Remove Nth Node from End of List.md)
[Copy List with Random Pointer](Copy List with Random Pointer.md)
[Add Two Numbers](Add Two Numbers.md)
Linked List Cycle
Find the Duplicate Number
[LRU Cache](LRU Cache.md)
Merge K Sorted Lists
Reverse Nodes in K-Group

# Trees
Invert Binary Tree	
Maximum Depth of Binary Tree	
Diameter of a Binary Tree	
Balanced Binary Tree	
Same Tree	
Subtree of Another Tree	
Lowest Common Ancestor of a BST	
Binary Tree Level Order Traversal	
Binary Tree Right Side View	
Count Good Nodes in a Binary Tree	
Validate Binary Search Tree	
Kth Smallest Element in a BST	
Construct Tree from Preorder and Inorder Traversal	
Binary Tree Max Path Sum	
Serialize and Deserialize Binary Tree

# Tries
Implement Trie	
Design Add and Search Word Data Structure	
Word Search II

# Heap/ Priority Que
first Impression, when we need to consider max and min in a list.
Operations in such a way only considering max or min at a time.

We mostly have a list.
We convert list to heap with some calculation logic.
Then we perform a loop with heappop() with some logic.

[Kth Largest Element in a Stream](Kth Largest Element in a Stream.md)
[Last Stone Weight](Last Stone Weight.md)
[K Closest Points to Origin](K Closest Points to Origin.md)
Kth Largest Element in an Array
Task Scheduler
[Design Twitter](Design Twitter.md)
Find Median from Data Stream

# Backtracking
[Subsets](Subsets.md)	
Combination Sum	
Permutations	
Subsets II	
Combination Sum II	
Word Search	
Palindrome Partitioning	
Letter Combinations of a Phone Number	
N-Queens

# Graphs
DFS or BFS used based on situation.
Directions are defined mostly.
------BFS-------
If BFS, then queue is used. 
colletions.deque(). pop(), popleft() append() etc
BFS is iterative, not recursive.
Generally, when we need to consider multiple movement in one iteration, BFS used.
Refer rotten orange.

Dont confuse yourself by trying to thing double loop
for r in range(ROWS):
    for c in range(COLS):
        if grid [r] [c] ==0;    # Dont try to compute in head what r,c location would be and all
        if grid [r] [c] ==1;    # Think like. When at r,c location, what to do.
        if grid [r] [c] ==2;    # Then next, for each different values


----DFS---
If DFS, then normal list or hashset or hash is used. 
set()
DFS is recursive in nature.
Generally when we need to consider one movement per iteration, DFS used.
------------
A hashmap or hashset is always used in some way.

[Number of Islands](Number of Islands.md)
[Clone Graph](Clone Graph.md)
[Max Area of Island](Max Area of Island.md) - General logic for all problems here
Pacific Atlantic Waterflow
Surrounded Regions
[Rotting Oranges](Rotting Oranges.md)   -   BFS example
Walls and Gates
Course Schedule
Course Schedule II
Redundant Connection
Number of Connected Components in Graph
Graph Valid Tree
[Word Ladder](Word Ladder.md)

# Advanced Graph
Reconstruct Itinerary	
Min Cost to Connect all Points	
Network Delay Time	
Swim in Rising Water	
Alien Dictionary	
Cheapest Flights Within K Stops

# 1-D Dynamic Programming
Climbing Stairs	
Min Cost Climbing Stairs	
House Robber	
House Robber II	
Longest Palindromic Substring	
Palindromic Substrings	
Decode Ways	
Coin Change	
Maximum Product Subarray	
Word Break	
Longest Increasing Subsequence	
Partition Equal Subset Sum

# 2-D Dynamic Programming
Unique Paths	
Longest Common Subsequence	
Best Time to Buy/Sell Stock With Cooldown	
Coin Change II	
Target Sum	
Interleaving String	
Longest Increasing Path in a Matrix	
Distinct Subsequences	
Edit Distance	
Burst Balloons	
Regular Expression Matching

# Greedy Approach
Maximum Subarray	
Jump Game	
Jump Game II	
Gas Station	
Hand of Straights	
Merge Triplets to Form Target Triplet	
Partition Labels	
Valid Parenthesis String

# Intervals
[Insert Interval](Insert Interval.md)
Merge Intervals
Non-Overlapping Intervals
[Meeting Rooms](Meeting Rooms.md)
Meeting Rooms II
Minimum Interval to Include Each Query

# Math and Geometry
Rotate Image	
Spiral Matrix	
Set Matrix Zeroes	
Happy Number	
Plus One	
Pow(x, n)	
Multiply Strings	
Detect Squares

# Bit Manipulation
Single Number	
Number of 1 Bits	
Counting Bits	
Reverse Bits	
Missing Number	
Sum of Two Integers	
Reverse Integer

