# Unpacking Operator

https://codewithmosh.com/courses/417695/lectures/6781701

n = [1,2,3]

print(n)    --> [1,2,3] but we want 1,2,3
print(*n)   --> 1,2,3

*n in python is similar to spread operator "...n" in javascript

Example use
values = list(range(5))
values = [*range(5)]        <-- Use this instead of above

another = [*range(3), *"Hello", *[3,2,1], *values] <-- This creates and add all lists together

d1 = {"x":1}
d2 = {"x":5, "y":9}
combine = {**d1, **d2, "z":8}   <-- Double unpack dictionary. This adds them all up.
Now we have x in d1 and d2. Unpacking will keep the second one, "x":5, coz it overwrites the first



