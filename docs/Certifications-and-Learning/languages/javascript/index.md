# Contents

- [Javascript](#Javascript)
- [Sections](#Sections)
- [Core Concept](#Core Concept)
    - [Loops and choices](#Core Concept#Loops and choices)
    - [Core Functions](#Core Concept#Core Functions)
    - [Arrays](#Core Concept#Arrays)
        - [Adding and Removing](#Core Concept#Arrays#Adding and Removing)
        - [Emptying an Array - remove all elements](#Core Concept#Arrays#Emptying an Array - remove all elements)
        - [Finding - Primitives](#Core Concept#Arrays#Finding - Primitives)
        - [Finding - Objects](#Core Concept#Arrays#Finding - Objects)
        - [Other](#Core Concept#Arrays#Other)
- [Extra](#Extra)
    - [Multithreading and Web Workers](#Extra#Multithreading and Web Workers)
    - [Hoisting](#Extra#Hoisting)
    - [Helpful](#Extra#Helpful)
    - [Interview General](#Extra#Interview General)

# Javascript
[Supporting Code](./code/index.md)

Javascript basics and OOP.
ECMAScript - Just a specification.
ES6 - In 2015, ES2015 above company released ES6 specification.
Node is c++ program which runs javascript.

Javascript Engine
    Firefox - SpiderMonkey
    Chrome  - v8

# Sections
* [01 Objects](01-Objects.md)
* [02 Prototypes](02-Prototypes.md)
* [03 Prototypical Inheritance](03-Prototypical-Inheritance.md)
* [04 ES6](04-ES6.md) -- Latest way of writing javascript

# Core Concept
Pillars of OOP and design patterns - [Design Patterns](../../design-patterns/index.md) -- LLD

## Loops and choices
if else         -- Usual
switch case     -- case break, case break, default.
for             -- for (let i=0; i<5; i++){}
while           -- Executes only if condition matches
do while        -- Executes atleast once, even if condition is false
for in          -- For list/ array - for (let key in personList){}
for of          -- New way, ES6 -> for (let color of colors){}  -- here the problem of using key is gone.
break           -- Exits and end the loop. 
continue        -- Continues to next iteration, skipping present, does not end the loop.

## Core Functions
Math - random, max, min, round, floor, ceil, trunc, abs
Strings - split, length, includes, startsWith, endsWith, indexOf, replace, toUpperCase, trim, trimLeft
Escape Notation in Strings - \, \n, many others 
Date - https://codewithmosh.com/courses/324741/lectures/5142758
    toDateString, toTimeString, toISOString
https://codewithmosh.com/courses/324741/lectures/5142753
Template Literals - Using `Put anything here 'even quotes' and {some-variable}`

## Arrays
Anything in []
eg [[],[],[],[]]
eg [{},{},{},{}]

Now Json is different, its like {{[],[]},{[],[]},{[],[]}}

In short 
[] uses array[0]
{} uses array.key

### Adding and Removing
https://codewithmosh.com/courses/324741/lectures/5088115
push(5,6) and pop()             - Add to end. push is adding and pop is removing
unshift(1,2) and shift()        - Add to start. unshift is adding and shift is removing
splice(a,b,c)                   - Add anywhere. a is start index of element, b is how many, c is what to add. In case of removing, we do not supply c.
slice(a,b)  - Means index a to b. This does not over write variable, splice does!

### Emptying an Array - remove all elements
let number = [1,2,3,4]

number = []                     - Must be defined in let, to replace with empty array
number.length = 0               - This works too
number.splice(0, numbers.length) - Ok but noisy

// Method 4 - Na, not too good
while (number/length>0)
    number.pop()

### Finding - Primitives
https://codewithmosh.com/courses/324741/lectures/5088119
indexOf
lastIndexOf
includes            - True false

### Finding - Objects
https://codewithmosh.com/courses/324741/lectures/5088121

anyArray.find(function(element){ return element > 10 })
anyArray.findIndex(function(element){ return element.name === "Something" })

https://codewithmosh.com/courses/324741/lectures/5088123
In ES6 simpler method
anyArray.find( () => {} )   <-- General Syntax
anyArray.find( element => element.name === "Something" )  <-- If single return and single input
anyArray.anyFunction( each => condition )  <-- Simple syntax of above, If single return and single input

### Other
arr1.concat(arr2)
arr1.slice(a,b)     // From index a to b-1. b index not included.

const combined = [...arr1, ...arr2]
Both above methods, numbers are copied to new, but in case array has objects, ONLY REFERENCE COPIED.

// Iteration. All are same.
arr.forEach(function(each){})       // Basic
arr.forEach((each, index)=>{})      // Arrow with index
arr.forEach(each => one-line-logic) // Arrow with one input and single line logic

someArray.join(',')       // Returns string
someString.split(' ')     // Split string

# Extra
## Multithreading and Web Workers
https://www.youtube.com/watch?v=Gcp7triXFjg

Create a worker.
Create your functions in different scripts.
Send message to worker
Worker send output back to the calling script

## Hoisting
https://www.youtube.com/watch?v=EvfRXyKa_GI

Before code runs, javascript moves some parts to top and leaves other wherever

Example
const sumA = (a,b) => a+b       <-- Functions in this way are run in sequence. Calling them before defining in code, means they will throw error.
function sumA(a,b) { a+b }      <-- These can be placed anywhere in code. Javascript moves them to top before running.
var something = anything        <-- Also moves to top. But shows undefined if called before.
const something = anything      <-- Does not move up. Shows an error rather than undefined.
let also works like const.

## Helpful
https://www.youtube.com/watch?v=v2tJ3nzXh8I

1. Using ?? instead of ||
2. Styling javascript console output with CSS using %c
3. Use optional chaining instead of long if(something && other && more){}. Use something?.other?.more instead
    Example --> console.log(array.someKeyInArray?.[0]) Here, if key exist, then it will show first item in that key.
                Old way --> if (array.someKeyInArray) {console.log(array....blah[0])}
4. If key and name are same, only mention the key.
    Example --> const some = {name: name, age: age, gender: sex}    <-- Old Long way
                const some = {name, age, gender: sex}               <-- New Shorter way
5. Use defer. We usually import js at the bottom of HTML, so that page loads fast, before it downloads big javascript file.
   Rather, using defer, the js starts downloading and renders HTML first and then load the js. Which is awesome.
        Example --> Right way --> Top of html put <script src="someScript.js" defer></script>
                    Wrong way --> Bottom of html put <script src="someScript.js"></script>
   More on this topic and async here --> https://www.youtube.com/watch?v=BMuFBYw91UQ

## Interview General
https://www.youtube.com/watch?v=8eRVxE9PEF0

Single Threaded
How async handeled in javascript
    Has event loop - maintains a call stack, push new func call, and pop which is done

Promises - three states are there 
    Also something called Ban, Catch and Final Blocks

What is event loop - it keeps checking event queue
    If you resolve promise, it goes to event queue and Event loop checks if its done/ completed
    Event loop checks event queue for callbacks, and pushes to call stack when needed
    
Function calls --> Event Queue --> Call Stack  <-- handled by event loop
    https://youtu.be/8eRVxE9PEF0?t=458

Promises VS Observables
    Observable has subscribed functions
    When something happens, observable tells subscribed function about it with or without values to process
    
prompts.all vs prompts.allsettled - https://www.geeksforgeeks.org/how-does-promise-all-method-differs-from-promise-allsettled-method-in-javascript/#:~:text=all()%20method%20returns%20an,properties%20further%20status%20and%20value.
    .all is like AND - Output is only data
    .allsettled is like OR  - Output is status and value pair.
    
Event Emitters - Like PubSub

Optemisation Techniques
    Caching
    Memoisation
    Break Continue and goto operations - https://youtu.be/8eRVxE9PEF0?t=838
    Web Workers?? Maybe
    Prevent memory leaks - Avoid global vars, use local scope
    Creating utility functions, to re-use code in various places
    
Call vs Apply vs Bind - https://medium.com/@leonardobrunolima/javascript-tips-apply-vs-call-vs-bind-d738a9e8b4e1
    Call - Pass argument as variables
    Apply - Pass argument as array
    Bind - Creates a new function - For Currying
    
Const vs Object.freeze - https://www.geeksforgeeks.org/difference-between-object-freeze-and-const-in-javascript/
    const prevents reassignment
    Object.freeze() prevents mutability
    
Map vs WeakMap - https://www.tutorialspoint.com/what-is-the-difference-between-map-and-weakmap-in-javascript

Null vs undefined

Hoisting

JsonP

Best Practice
Consitent Code Style
ESLint
Free commit tools and check with Husky

Prototyping

Module Pattern VS Constructor Pattern and Prototype

Reference VS Value
    Javascript is passed by value
    
Deep Freezing vs Shallow Freeze

why "this" operator inconsistent

function vs arrow function
    in normal function, this needs to be binded
    in arrow function, it is preconfigured

async await VS generators (yield) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
    Concept of "symbol" also come here
    
    
generator vs coroutine - https://medium.com/@tjholowaychuk/callbacks-vs-coroutines-174f1fe66127
    Generators are sometimes referred to as “semicoroutines”, a more limited form of coroutine that may only yield to its caller.
    

    
    
