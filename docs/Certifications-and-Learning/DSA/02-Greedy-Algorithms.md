# Contents

- [Theory by Abdul Bari](#Theory by Abdul Bari)
    - [Famous Problems which comes under it](#Theory by Abdul Bari#Famous Problems which comes under it)
    - [Overview](#Theory by Abdul Bari#Overview)
    - [General Method and Approach](#Theory by Abdul Bari#General Method and Approach)
- [Greedy Algorithms Examples](#Greedy Algorithms Examples)
    - [Bulb Problem](#Greedy Algorithms Examples#Bulb Problem)
    - [Highest Product](#Greedy Algorithms Examples#Highest Product)
    - [Disjoint Intervals](#Greedy Algorithms Examples#Disjoint Intervals)
    - [Largest Permutations](#Greedy Algorithms Examples#Largest Permutations)
    - [Meeting Rooms](#Greedy Algorithms Examples#Meeting Rooms)
    - [Distribute Candies](#Greedy Algorithms Examples#Distribute Candies)
    - [Seats](#Greedy Algorithms Examples#Seats)
    - [Assign mise to holes](#Greedy Algorithms Examples#Assign mise to holes)
    - [Majourity Element](#Greedy Algorithms Examples#Majourity Element)
    - [Gas Station](#Greedy Algorithms Examples#Gas Station)

# Theory by Abdul Bari
https://www.youtube.com/watch?v=ARvQcqJ_-NY&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=39

## Famous Problems which comes under it
Knapsack Problem        - https://www.youtube.com/watch?v=oTTzNMHM05I&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=40
Job Sequencing
Optimal Merge Pattern
Huffman Coding
Prims and Kruskals
Dijkstra Algo           - For finding shortest paths

## Overview
To solve optemisation problem.
Min and Max type.
Can have many solution.
Then we always have a constrain or condition.
We need to choose the solution as per the constraints. We can have multiple constraints.
Hence we have a jargon of feasible solution. Solution which considers the constraints.
We can have multiple feasible solutions, but we choose the best, jargon alert, called Optimal Solution.

Note: In case of dynamic programming, we do not have constrain, and we go for the best solution.

Faster then dynamic programming, but solution is based on constrain, so not most accurate.
Dynamic Programming is slower but more accurate.

## General Method and Approach
https://youtu.be/ARvQcqJ_-NY?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=378

Problem to be solved in stages.
In each stage, check feasibility of solution. If feasible, include in solutions list, else reject.
Then we end up with the final Optimal Solution.
For loop
    if loop
        Solution

# Famous Problems

## Knapsack Problem
https://www.youtube.com/watch?v=oTTzNMHM05I&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=40

Problem is 2D. Two things to consider for maximizing or minimizing.

We have n items. Each item has profit margin + Each item has a weight. - 2D.
We need to fill a bag, with a constraint of say 15 kg max weight allowed. - Constraint.
We need to fill it, such that the final profit is maximised. - Expectation.

Method:
Convert 2D to 1D first.
Either we fill by maximum items OR fill by maximum weight.
We need a combination, a weighted average, where max weight is 15 kg, and get max profit.
Calculate profit/ weight, call it p/w. Now this becomes a 1D problem.

My solution - Now, we can see the max in 1D list, and divide the constraint, 15kg by the max. And include only the highest profit/ weight item.

Standard Solution -
Take max p/w, subtract from 15kg, remaining 14kg
take second max p/w, subtract from 14kg, remaining 12kg ...etc
Finally, multiply each weight and profit and add, to get result.

ISSUE: Not in the video, nor on geekforgeek, it is explicitly tells that we need to include most item, and can not include only one.
So, somewhere it is assumed that we need to include more than one item, and not only one with max profit.
It is assumed we can take maximum of one unit, and minimum any fraction if needed. (in video)
On geek for geek, they say fractions not allowed.

## Job Sequencing
https://www.youtube.com/watch?v=zPtI8q9gvX8&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=41

A list of jobs with returns/ profit - [20, 15, 10, 5, 1]
B list of deadlines                 - [2 , 2,  1,  3, 3]
Constraint - Max in deadline, ie 3 slots available, max in deadline.
Assumption - Each job takes a unit of time to complete.
Expectation - Solve for max profit. Only one job can be done at a time.
Fractional completion not allowed.

How to see the problem.
You are a painter. You take 1 hour to make a portrait.
Say five people are there, each wiling to give you money as per their capacity.
You open shop at 12pm. Refer list above.
1st person says, I will pay you 20 bucks and can wait till 2pm
2nd says, I will pay 15 bucks and wait till 2pm
3rd says, I will pay 10 bucks and wait till 1pm
4th says, I will pay 5 bucks and wait till 3pm

How to approach, greedy method.
1st Guy, 2nd Guy then 4th Guy, coz third guy wanted delivery at 1pm, but we used that time for 2nd person.

## Optimal Merge Pattern
https://www.youtube.com/watch?v=HHIc5JZyenI&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=42

You have 5 list of different sizes.
Perform 2-way merge sort so that total cost of merging is minimised.

Cost is = Total of all internal nodes, leaving the leaves out.

Method:
Find len(eachList)
Start with two smallest list. Get a result. Now we have 4 lists, 2 combined, and 3 from earlier.
Then again choose smallest list, including the above result list and continue....
What you get is optimal merge sort.

## Huffman Coding
https://www.youtube.com/watch?v=co4_ahEDCho&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=43

Depends on understanding of Optimal Merge Pattern.
All about compressing a string message. Better for storage and network communication.

## Prims and Kruskals
https://www.youtube.com/watch?v=4ZlRH0eK-qQ&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=44

Jargon - Minimum Cost Spanning Tree
We have a graph with Vertices and Edges. 
Vertices have value and each edge has weights.
The graph is closed and maybe cyclic.

We need to find minimum cost spanning tree, based on edge weights, 
which means removing some edges from the given graph, and making an open graph.

2D - See we have vertices value and edge weight, hence greedy approach is relevant.
So we have two algo for this, prim and kruskals

### Prims
https://youtu.be/4ZlRH0eK-qQ?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=491

Note: In optimal merge tree, we choose smallest list size to start with.
Here we start with smallest edge weight. and then move forward, 
selecting minimum edge weight, which are connected to selected vertices.* imp

### Kruskals
https://youtu.be/4ZlRH0eK-qQ?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=733

Like prim, but here we always choose smallest edge, BUT condition of connected vertices is not there.
Important consideration: While selecting the minimum edge, if we end up closing a graph, don't select the edge.

O(n^2)
But if using min heap, it becomes O(n log n)

Note: This may work for disconnected graphs too, but does not find spanning tree overall. Find spanning tree for each disconnected graph. - https://youtu.be/4ZlRH0eK-qQ?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=938

For missing edge weight, once can find the minimum weights for those edges too - https://youtu.be/4ZlRH0eK-qQ?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=1008

## Dijkstra Algo
https://www.youtube.com/watch?v=XB4MIexjvY0&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=45

Another algo called **Bellman-Ford** for shortest path - https://www.youtube.com/watch?v=2raV0H9KqY8&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=80

For shortest path problems.
Works on directed and non directed graphs.

For a given starting node in a graph, any node can be selected, finding its minimum distance to all other nodes.

Jargon - Relaxation

Select Node and see less weight nodes, choose the less weight edge and relax the node
Choose next node and again less weight node, relax the node by updating the node.
..... till all nodes updated.

Finally we get a table with shortest distance of each node from the starting node.

Worst Case O(n^2)

Drawbacks - https://youtu.be/XB4MIexjvY0?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=862
If edge weight is negative value.


# Greedy Algorithms Examples

https://www.youtube.com/watch?v=bC7o8P_Ste4

Python solution - https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/

Find the fastest solution, but not guaranteed the optimal one.

Think of minesweeper game. A 2d grid, where we move in different directions without knowing what lies ahead. We keep choosing the best block and move.

## Bulb Problem
https://youtu.be/bC7o8P_Ste4?t=327

A list like [1,0,1,1,0,0,1,1,0,1,0,0,0,0,1] is given
On each element if 0, we flip it by 1, and also flip remaining to opposite of what they are.
We need to find minimum number of switches to turn all of them on, ie 1

O(n^2) and O(1) space in bruteforce

def bulbs(A):
    cost = 0
    
    for each in A: # This is O(n) solution
        if cost%2 ==0: each = each
        else: each = not each
        
        if b%2==1: continue
        else: cost +=1
    return cost


## Highest Product


## Disjoint Intervals


## Largest Permutations
https://youtu.be/bC7o8P_Ste4?t=1757

For list L and A number N, Swap two items in list, N number of times, so that when each item in list is concatenated, it forms the biggest number possible.

Eg L = [1,3,2] and N = 1
We swap item 3, with 1 to get [3,1,2] -> 312 <-- this is biggest number
L = [1,2,3,4] and N = 1. Swap 4 with 1, to get 4231

N=3
L = [1,3,2,7,6,5,4]


def swap(L,a,b):
    L[a], L[b] = L[b], L[a]
    return L
    


## Meeting Rooms
https://youtu.be/bC7o8P_Ste4?t=2919




------------My logic, need to check------
L = [[5,10],[15,20],[0,30]]
L1 = [5,5,30]    - Time to complete a meeting, difference taken of sub list.
L2 = [1,1,1]     - How many meeting rooms needed per meeting.
Max rooms 3, if all run.
30 is max, 1 room needed
Sum of remaining, 5 + 5 less than 30, only one more room for needed.
Answer is 2.

L = [[5,15],[10,30],[0,60],[20,90]]
L1 = [5,20,60,70]   - total 95....[0.05,0.21,0.63,0.73] - 
L2 = [1,1,1,1]

70 Max, 1 room
5+20+60 = 85 > 70, then 60 max, 1 room
5+20 = 25 < 60, then 1 more room.

Answer is 3 rooms.
-------------
M = []
for each in L:
    m.append(each[1]-each[0])


## Distribute Candies
https://youtu.be/bC7o8P_Ste4?t=3032

Rating   = [1,7,4,3,1] -- [1,1,3,4,7]
children = [1,1,1,1,1]

Give a candy to lowest, and then more candy to every higher rating kid from previous.

--------My solution
rating = rating.sort()
total = 1
inc = 1
for i in len(range(rating)):
    if each[i]>each[i-1]:
        inc+=1
        total+=inc
    else:
        total+=inc
        

## Seats


## Assign mise to holes


## Majourity Element


## Gas Station


















