# Set
https://codewithmosh.com/courses/417695/lectures/6781697

A collection with no duplicates.

Uses {} brackets

setVar = {1,2,3,4}

n = [1,2,3,4,4,4,5,6,6]
unique = set(n)             <-- Gives {1,2,3,4,5,6}

unique.add(7)
unique.remove(5)
len(unique)

Most list method don't work here like unique[0] will throw error

# The Main power of sets!

a = {1,2,3,4}
b = {1,2,5,6}

a | b           <-- union {1,2,3,4,5,6}
a & b           <-- intersection {1,2}
a - b           <-- difference {3,4} keeps from left item
a ^ b           <-- symmetric difference {3,4,5,6} remove common in both

