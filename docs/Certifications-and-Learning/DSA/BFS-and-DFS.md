# Graph Traversals

https://www.youtube.com/watch?v=pcKY4hjDrxk&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=61

# BFS vs DFS
Two concepts.

1. Visiting a Vertex
2. Exploration of Vertex

BFS - Breadth First Search
DFS - Depth First Search

BFS - Visit any start node, explore each adjacent node first, then visit next node.. iterate
DFS - Visit any start node, explore one adjacent node at a time, till end leaf, then visit next node.. iterate

BFS - Checks level by level
DFS - Goes to deepest child of a node, then explore next. Its branch by branch, not level by level.

BFS - At the end we get, BFS Spanning Tree. Edges are called cross edges.
DFS - At the end we get, DFS Spanning Tree. Edges are called back edges.

BFS - We don't need a DS to run this
DFS - We need to use stack DS to keep track of ancestor nodes.

https://youtu.be/pcKY4hjDrxk?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&t=735
In DFS, a stack is used to keep track of the parent nodes. Since we keep going deep, we must know how to go back, hence stack keeps track of all ancestor nodes of the given visited node at all stages.
When reached the leaf, and going back up, stack is one by one made empty.

# Important Basics Question
https://www.youtube.com/watch?v=tWVWeAqZ0WU

⭐️ Course Contents ⭐️
(0:00:00) course introduction
(0:02:23) graph basics
(0:07:10) depth first and breadth first traversal
(0:29:13) has path - https://structy.net/problems/has-path
(0:42:11) undirected path - https://structy.net/problems/undirect...
(1:00:44) connected components count - https://structy.net/problems/connecte...
(1:13:29) largest component - https://structy.net/problems/largest-...
(1:24:03) shortest path - https://structy.net/problems/shortest...
(1:39:36) island count - https://structy.net/problems/island-c...
(1:58:52) minimum island - https://structy.net/problems/minimum-...

