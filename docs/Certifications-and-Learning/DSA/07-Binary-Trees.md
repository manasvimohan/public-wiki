# Binary Trees

Use?
Represent hierarchical data
Databases
Auto-completions
Compilers
Compressions jpeg and mp3

tree in python - https://www.youtube.com/watch?v=EitnYxinKkw&list=PL3edoBgC7ScWhy0mlNvLPssa_sDGnyUcb&index=3

https://codewithmosh.com/courses/650827/lectures/11620088
Following only if tree is balanced. Height Left- height Right <= 1
If right child is long, right skewed
If left is long, left skewed

Larger values than root node goes to right and smaller values to left

Lookup - O(log n)
Insert - O(log n)
Delete - O(log n)

# Trees

Parent - Children
Root Node -leaf nodes
Each child is a Sub trees

# Building it
Tree has root
Node has value, leftchild and rightchild
insert
find: boolean

# Important

https://codewithmosh.com/courses/650827/lectures/11620012
Traversing
    Breadth First, also called Level Order Traversal
    Depth first
        pre-order   - root-left-right
        in-order    - left-root-right - Gives ascending order - do right-root-left for decending
        post-order  - left-right-root

All the above are done using recursion

https://codewithmosh.com/courses/650827/lectures/11620021
Recursion
Replacement for loop, call function/ method from within itself

# Interview

https://codewithmosh.com/courses/650827/lectures/11620010
Check Equality of two trees

https://codewithmosh.com/courses/650827/lectures/11620016
Validate (BST) Binary Search Tree
Meaning, all value on left sub tree should be less than root
and all value on the right sub tree should be more than root

https://codewithmosh.com/courses/650827/lectures/11620015
Find K-Distance in tree
print all leaves 3 level down or 2 level etc

https://codewithmosh.com/courses/650827/lectures/11620022
Level order traversal, breadth first
