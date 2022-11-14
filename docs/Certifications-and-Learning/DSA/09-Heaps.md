# Contents

- [Heaps](#Heaps)
- [Video by Abdul Bari](#Video by Abdul Bari)
    - [Basic Theory](#Video by Abdul Bari#Basic Theory)
    - [Insert - Pushing Up. Left to right in list.](#Video by Abdul Bari#Insert - Pushing Up. Left to right in list.)
    - [Delete - Pushing down. Right to left in list.](#Video by Abdul Bari#Delete - Pushing down. Right to left in list.)
    - [Heap Sort](#Video by Abdul Bari#Heap Sort)
    - [Heapify O(n) - Pushing Down - Right to left in list.](#Video by Abdul Bari#Heapify O(n) - Pushing Down - Right to left in list.)
    - [Priority Queue](#Video by Abdul Bari#Priority Queue)

# Heaps
https://codewithmosh.com/courses/650827/lectures/11620136

Python Versions:
Video - https://www.youtube.com/watch?v=pLIajuc31qk&list=PL3edoBgC7ScWhy0mlNvLPssa_sDGnyUcb&index=1
Min Heap - https://www.geeksforgeeks.org/min-heap-in-python/
Max Heap - https://www.geeksforgeeks.org/max-heap-in-python/

A type of binary tree, which satisfy heap property which is:
A complete tree.
    Only last level of tree can be unbalanced.
    Secondly, left leafs should be filled, right can be empty.
    In the last, right filled and left empty not allowed.
All child value less than parent.
Left child less than root, right child more than root.

Above is a Max heap
Min Heap also there, where root has smallest value

Use?
Sorting (Heap Sort)
To implement Graph Algorithms (shortest path)
Priority queues
Finding Kth smallest or largest value - Interview important

While adding nodes, we bubble up and bubble down

# Video by Abdul Bari
https://www.youtube.com/watch?v=HqPJF2L5h9U&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=32

## Basic Theory
Its all about mapping complete binary tree to List DS and vice-versa.
Image a heap of apples. Like a 2d cone.

When we convert a binary tree into a list.
Assume for an item in list, at index i
Parent -- i/2 ..floor value or round down
Left Child -- 2*i
Right Child -- 2*i + 1

So when constructing list from binary tree, if node is empty, we need to leave a list item BLANK.
Hence, a large binary tree will take too much O() space

If we have missing elements, when converted to array, then it is incomplete binary tree.
Complete Binary Tree -  when no item is missing
Full Binary tree, if all nodes full till leaves, at lowest level.

Heap is a complete Binary Tree

Max Heap - Root is largest 
Min Heap - Root is smallest

> Following are discussed based on Max Heap.

## Insert - Pushing Up. Left to right in list.
New item is not inserted in the ROOT -- common mis conception
New item is inserted at the bottom left leaf.
Then comparing with parent/ ancestors in each iteration.
Time taken is number of swaps, which is the height of the tree.
Min O(1)        - No swapping needed 
to 
Max O(log n)    - Swapping from bottom leaf done

## Delete - Pushing down. Right to left in list.
The root is removed here. Image a heap of apple, the top item is removed, deleted.
We need to preserve complete binary tree property while performing operation.
Who takes place of root? The last item in tree, bottom right most item, say I.
Then we compare the children, the bigger is swapped with I, which was moved up to root.
This is continued for every iteration, and done.

## Heap Sort
https://youtu.be/HqPJF2L5h9U?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=1869
Step 1 - For a list, create a heap by inserting
Step 2 - Then delete all elements

Step 1 - O(n log n) - because n items added, which is O(n) and inserting is O(log n)
Step 2 - O(n log n) - because n items deleted, which is O(n) and deletion is O(log n)

Hence heap sort takes O(2n log n) which is O(n log n)

## Heapify O(n) - Pushing Down - Right to left in list.
https://youtu.be/HqPJF2L5h9U?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=2535

It is procedure to create HEAP. 
We did it already, but there it was pushing up, but here its pushing down.

For creating heap, O(log n)
For heapify, O(n)

## Priority Queue
https://youtu.be/HqPJF2L5h9U?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=2875

NOTE: There is a concept in Operating System of priority queue, THIS IS DIFFERENT, not that.

Two types
1. Smallest item being high priority
2. Largest item being high priority

Heap is best DS for implementing Priority Queue. Why?
Insertion and deletion of one item is log n. 
While in normal list, either deletion is faster or insertion, only one faster at a time - O(n) 





