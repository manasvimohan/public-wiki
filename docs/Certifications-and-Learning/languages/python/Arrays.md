# Arrays
https://codewithmosh.com/courses/417695/lectures/6781690

List can be used for anything. But when thing get very big, we get performance hit, hence array used.
This is in python, and we need to specifically use array.

On google, search python 3 typecode

from array import array

a = array("i", [1,2,3])         <-- here i is the typecode, check out the google search

Just like list
a.append(4)     <-- add to last
a.insert(4,4)   <-- insert at location using an index, here at fourth index put 4
a.pop()         <-- remove last
a.remove(2)     <-- remove specific item

a[0] = 2        <-- replace zero index item with 2
a[0] = "abc"    <-- does not work coz type is defined in array, unlike list


