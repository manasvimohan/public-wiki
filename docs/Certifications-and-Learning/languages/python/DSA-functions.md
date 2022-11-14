# Important Functions

# Lambda Function
https://codewithmosh.com/courses/417695/lectures/6781706

format --> lambda input:output

Its a one line, anonymous function (function with no name). Kind of use once and throw.

items = [("P1", 10), ("P2",5), ("P4",11)]
items.sort()    <-- Does not work

items.sort(key=lambda item:item[1])

# Map Function
https://codewithmosh.com/courses/417695/lectures/6781705

items = [("P1", 10), ("P2",5), ("P4",11)]

prices = []
for each in items:
    prices.append(item[1])
    
Above is direct way; but stronger is map!

map(function, iterable)

prices = map(lambda each:each[1], items)        <-- Give map object
prices = list(map(lambda each:each[1], items))  <-- Convert map object to list

# Filter function

items = [("P1", 10), ("P2",5), ("P4",11)]

filter(function, iterable)

filtered = filter(lambda each: each[1] >= 10 , items)   <-- Gives filter object
filtered = list(filter(lambda each: each[1] >= 10 , items))   <-- Convert filter object to list

How filter and map different? - my explanation, you need to confirm and check
Filter gives the filtered list back, which looks like original list
Map gives the specific items within the list

# List Comprehension
Only python seem to have this features, other languages don't have it.
Again a looping function on iterables.

Both map and filter can be repaced by list comprehension and is considered my pythonic

Format --> [output for input in iterable]

Example
prices = [each[1] for each in items]
filtered = [each for each in items if each[1]>=10]

# Zip functions
Combining multiple lists, index by index. 

Format --> zip(l1,l2,l3,l4,l5 ...... ln)

l1 = [1,2,3]
l2 = ["a","b","c"]

we want l3 to look like [(1,"a"),(2,"b"),(3,"c")]

zip(l1,l2) <-- Gives zip object
l3 = list(zip(l1,l2)) <-- you get what you want

cool-thing = list(zip("abc", l1, l2)) <-- Now since string is a list, three lists are combined

# Dictionary and advance comprehension
https://codewithmosh.com/courses/417695/lectures/6781693

[do-something for each in collection]
[output for each-element in input]      <-- input is list, set, dict anything

values = []
for x in range(5):
    values.append(x*2)
    
values = [x*2 for x in range(5)]        <-- list
values = {x*2 for x in range(5)}        <-- set
values = {x: x*2 for x in range(5)}     <-- dictionary, only output part is changed

values = (x*2 for x in range(5))        <-- should be tuple, but no. Its a GENERATOR

# Generator Expressions
https://codewithmosh.com/courses/417695/lectures/6781708

Lists go into memory all at once, hence a range(10000000000000000) can kill the ram.
hence we use Generator, to load only what is needed and when needed, not all at once.

value-a = [x*2 for x in range(100000))]   <-- For a large number, all in memory are not good!

value-b = (x*2 for x in range(100000)))   <-- Generator object, curve bracket, which can be iterated

for x in values-b:  # or value-a
    print(x)
    
from sys import getsizeof

getsizeof(value-a)      <-- 824464 byte
getsizeof(value-b)      <-- 120 byte

WOW!!!

len(value-b)    <-- throws error, coz generator object calculates things only when needed and running
len(value-a)    <-- you get 100000




