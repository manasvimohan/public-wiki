# Queues
https://codewithmosh.com/courses/417695/lectures/6781688

FIFO - First in -- First Out

Like a real human key on a ticket counter

Removing first item from a list is very memory intensive in python.
Example. Image a list of 10000 items, remove the first, and remaining 9999 items will have to be moved to left.

So deque is used. 

from collections import deque

n = [1,2,3,4,5,6,7,8,9]

que = deque(n)

.append
.popleft

