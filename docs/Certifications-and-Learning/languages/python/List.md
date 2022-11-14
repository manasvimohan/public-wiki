# Contents

- [Lists](#Lists)
- [Basic Creation](#Basic Creation)
- [Accessing](#Accessing)
- [Unpacking and packing](#Unpacking and packing)
- [Looping](#Looping)
- [Adding and Removing](#Adding and Removing)
    - [Add](#Adding and Removing#Add)
    - [Remove](#Adding and Removing#Remove)
- [Finding Items](#Finding Items)

# Lists

# Basic Creation
n = [a,b,c]
matrix = [[1,2],[1,3]]
zeros = [0] * 100
combine = zeros + n

genList = list(range(20))
genList2 = list("Hello Bhai")

len(n)

# Accessing
n[1]    <- count from start
n[-1]   <- go to last, and the count
n[0:3] n[:3] n[0:] n[:] <- from to

n[::2] <- list in steps of 2
n[::-1] <- all items, but in reverse

# Unpacking and packing
https://codewithmosh.com/courses/417695/lectures/6781696

n = [1,2,3]
first, second, third = n    <- each var is given each item of list

n = list(range(20))
first, second, *other = n   <-- var first and second assigned, and new list with other items created
first, *other, last = n     <-- capture first and last, middle ones form new list named other

# Looping
https://codewithmosh.com/courses/417695/lectures/6781702

n = [1,2,3]
for each in n:  <-- gives list items only
    print(each)
    
for each in enumerate(n): <-- This gives a tuple of index and item of list
    print(each[0], each[1])
    
OR

for index, item in enumerate(n):  <-- list unpacking used
    print(index, item)

# Adding and Removing

## Add
n = [1,2,3,4]

n.append(5)         <-- add to end
n.insert(0,"xyz")   <-- add to index, here at 0 index, which is start giving ["xyz",1,2,3,4]

## Remove
n.pop()             <-- remove last item
n.pop(2)            <-- remove item at index 2
n.remove("xyz")     <-- remove first instance from left. Run loop to delete all instances.
del n[0], n[::2]    <-- remove range, in steps, specific.. many options
n.clear()           <-- clear the list, make it empty again

# Finding Items
https://codewithmosh.com/courses/417695/lectures/6781691

n = [1, 2, 2, 2, 9, 3, 4]
n.index(2) <-- Gives back index of specified item
n.index(7) <-- Gives error. Other languages like c or java gives -1 if item does not exist

We can do following:
if 7 in n:
    print(n.index(7))
else:
    print(-1)

n.count(2) <-- Number of occurrence of 2 in list, which will give 3 in our case

# Sorting
https://codewithmosh.com/courses/417695/lectures/6781698

n = [1,5,4,3,78,5,2,9,8,6,0]
n.sort()                <-- Ascending order
n.sort(reverse=True)    <-- Descending

To create a new sorted list, and not alter the existing one
newList = sorted(n)
newList = sorted(n, reverse=True)

items = [("P1", 10), ("P2",5), ("P4",11)]
items.sort()    <-- Does not work, refer next section, lambda function

def sort_item(item):
    return item[1] <-- Sort is kind of loop in behind. So for "each" item's index 1, will be returned
    
items.sort(key=sort_item) <-- we tell sort, the key which is to be sorted is as per our function

The above is too long, hence lambda can be used.

# Lambda Function
https://codewithmosh.com/courses/417695/lectures/6781706

Its a one line, anonymous function (function with no name). Kind of use once and throw.

items = [("P1", 10), ("P2",5), ("P4",11)]
items.sort()    <-- Does not work

items.sort(key=lambda item:item[1])
