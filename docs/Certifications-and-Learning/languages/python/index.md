# Contents

- [Core Concepts](#Core Concepts)
- [Refresher by Mosh](#Refresher by Mosh)
- [Excerise interview question](#Excerise interview question)
- [Extra](#Extra)
    - [Multithreading and MultiProcessing](#Extra#Multithreading and MultiProcessing)
        - [MultiThreading](#Extra#Multithreading and MultiProcessing#MultiThreading)
        - [MultiProcessing](#Extra#Multithreading and MultiProcessing#MultiProcessing)
        - [JobLib parrallel](#Extra#Multithreading and MultiProcessing#JobLib parrallel)
    - [pprint for better control on printing](#Extra#pprint for better control on printing)
    - [If based checking and "in" operator](#Extra#If based checking and "in" operator)
    - [Swapping variables example](#Extra#Swapping variables example)

# Core Concepts

Pillars of OOP and design patterns - [Design Patterns](../../design-patterns/index.md) -- LLD

Protocol Class - Raise error when the method is called.
Abstract Class - Raise error when the child instance is created.

[all the code](./code/index.md)

*arg        <-- Makes tuple () of any number of arguments in a function
**kwargs    <-- Makes dictionary {} of any number of keyword arguments in a function

# Refresher by Mosh

* [List](List.md)
* [DSA functions](DSA-functions.md)
* [Stacks](Stacks.md)
* [Queues](Queues.md)
* [Tuples](Tuples.md)
* [Arrays](Arrays.md)
* [Set](Set.md)
* [Dictionary](Dictionary.md)
* [Unpacking Operator](Unpacking-Operator.md)

# Excerise interview question
https://codewithmosh.com/courses/417695/lectures/6781694

# Extra
## Multithreading and MultiProcessing


What are the difference between them - https://www.youtube.com/watch?v=ecKWiaHCEKs

One GIL (Global Interpreter Lock) for all threads. Meaning on interpreter is used. In multiprocess, each process has its own GIL.
Memory is shared among threads. But in multiprocessing, it is independent for each process.
Fast to start a thread as compared to process.
A new thread is spawned with in a single process, while multiprocess has its own independent processes.

Mutexes often necessary in threading, and not necessary in process, unless processes use threads within.

In all cases, data can be shared between instances using ques and pipes.

Another good video --> https://www.youtube.com/watch?v=AZnGRKFUU0c

Generally Speaking, if we have multiple functions, interdependent on each other, like finding correlation of
every item to another item in a pandas df (i had this issue), then this can not work. 
To make it work, we need to find permutations of all pairs, make n lists of them, where n is number of cores in cpu,
then create processes.

How threading, process and async combines potentially:
1. Make threads with in a function.
2. Run the function multiple times in various processes.
3. Have mulitple scripts of the above. Call them at once using async io, redis, kafka ques etc..

### MultiThreading
https://www.youtube.com/watch?v=GqHLztqy0PU

Mostly used when IO based tasks, like reading writing downloading files and doing something on them.

Basic format:
```python
from threading import *

# Define class and inherit from Thread
class AnyClassA(Thread):
    pass
class AnyClassB(Thread):
    pass

# Instantiate the classes
tA=AnyClassA()
tB=AnyClassB()

# Start the process in parrallel
tA.start()
tB.start()

# Wait for both of them to stop
tA.join()
tB.join()

# Print the final message
print("All Done")
```    

### MultiProcessing
https://www.youtube.com/watch?v=GT10PnUFLlE

Another nice video sing queues in processing - https://www.youtube.com/watch?v=iwFGC_3sVio

Mostly used when CPU intensive tasks and computations are to be done, and single core is just making things slow.
Here output to functions are not returned!! Use Queue - https://www.youtube.com/watch?v=sp7EhjLkFY4


```python
import multiprocessing as mp

def func_a(x):
    pass
    
def func_b(x):
    pass

if __name__ == '__main__':
    p1 = mp.Process(target=func_a, args=(x,))   # in args, we have comma after x --> (x,)
    p2 = mp.Process(target=func_b, args=(x,))
    
    p1.start()
    p2.start()
    
    p1.join()
    p2.join()
    
    print("All Done")

```

### JobLib parrallel
https://www.youtube.com/watch?v=Dm4up8_zJdo

Its kind of abstraction on multiprocess and threading. 
When there is a function to be run multiple times, the same function will be run n times, n is number of cores specified.
Note that if the function has a loop inside, and it is run through joblib once, it makes no sense. 
Only if a function is to be run many times, and outputs are not interconnected, then joblib is cool to run.

```python
from joblib import Parallel, delayed

def func(x):
    pass

result = Parallel(n_jobs=-1)(delayed(func)(x) for x in range(1000)) # -1 means all cores.
```

### Async IO. Alternative to threads. 

In javascript what we call promise, here we call futures.


Link 1 - https://www.youtube.com/watch?v=t5Bo1Je9EmE

```python
import asyncio

async def func_a(x):
    return x*5

async def func_b(x):
    return x*10
    
async def main():
    x=5
    t1 = asyncio.create_task(func_a(x))
    t2 = asyncio.create_task(func_b(x))
    
    v1 = await t1
    v2 = await t2
   
    await asyncio.gather(func_a(x), func_b(x)) # Another way https://www.youtube.com/watch?v=t0JXiljpNRo


# Another way - https://www.youtube.com/watch?v=BI0asZuqFXM

async def another():
    x=5
    t1 = loop.create_task(func_a(x))        # notice loop.create_task instead of asyncio.create_task
    t2 = loop.create_task(func_b(x))
    
    await asyncio.wait([t1,t2])
    
    return t1,t2

if __name__ = '__main__':
    
    loop = asyncio.get_event_loop()
    a1, a2 = loop.run_until_complete(another())
    print(a1.result())
    print(a2.result())
    loop.close()
    
```

## pprint for better control on printing
from pprint import pprint
pprint(long-dictionary, width=1)

## If based checking and "in" operator
if someValue in someVariable:
    print("yes it exists in the variable like list, set, dictionary")

## Swapping variables example
https://codewithmosh.com/courses/417695/lectures/6781695

x=10
y=11

x, y = y, x         <-- EASY! but why it works?

Notice, x = 1, 2 is like defing a tuple!
x, y = tuple is like unpacking tuple

Hence x, y = y, x is like define a tuple and then unpack in reverse WOW!!!


