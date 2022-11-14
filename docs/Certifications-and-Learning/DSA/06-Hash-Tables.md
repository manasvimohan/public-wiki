# Contents

- [Hash Tables](#Hash Tables)
- [Operations O(1), sometimes worst case is O(1)](#Operations O(1), sometimes worst case is O(1))
- [Interview questions - Finding related](#Interview questions - Finding related)
- [Hash Functions](#Hash Functions)

# Hash Tables

Key Value Pair.
Like dictionary in python

Used? -- whenever searching fast is needed
Spell checkers use it
Dictionaries 
Compilers to look up items
Code editors use it for look ups

Java calls it HashMap
JavaScript calls it Objects
Python and C# calls it Dictionaries

Google search java map interface
https://codewithmosh.com/courses/639884/lectures/11425544

# Operations O(1), sometimes worst case is O(1)

insert
lookup
delete

# Interview questions - Finding related

https://codewithmosh.com/courses/639884/lectures/11425545
Find first non repeating character

Find first repeated

# Hash Functions
https://codewithmosh.com/courses/639884/lectures/11425551

When the keys in a dictionery are converted to hashes.
Example, keys can be name, number etc. But to make them easily searchable, they should be numbers in a way.
So, to convert the string to number, hashing of key or index is done.
Its exactly like what we do in cryptography.
A digest of the key is what is saved.

## Collisions
Two or more keys create the same digest. md5 it happens.

We can prevent collisions by
Chaining (each key can point to linkedlist, and collisions are added to it)
Open Addressing (we assign new location in memory for new hash)
    Linear Probing
    Quadratic probing
    Double Hashing
