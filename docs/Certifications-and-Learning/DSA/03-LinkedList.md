# Linked List

# Intro

Can grow and shrink, unlike array.

Stacks and Ques are implemented using linked list.

Key Value pair, each node has 1. data and 2. link to next node

HEAD > ... Many in the Middle ... > TAIL

Insert
    End O(1)
    Start O(1)
    Middle O(n)

Delete
    End O(n)
    Start O(1)
    Middle O(n)
    
# Working in java

LinkedList<E>   //E could be interger, string etc
LinkedList list = new LinkedList()

list.addLast(e:10);
list.contains(10);
list.indexOf(10);
list.size();
list.toArray();

# Exercise
Make linked list in python
addFirst addLast
deleteFirst deleteLast
contains
indexOf

# Types

## Singly
Point only to next item

## Doubly
Point to next and previous item

# Reversing a linked list - #interview question
https://codewithmosh.com/courses/639884/lectures/11425352



