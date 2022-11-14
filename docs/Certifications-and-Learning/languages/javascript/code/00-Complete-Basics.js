// Complete Basics

////// NOTE, in javascript
[ ] <-- array
{ } <-- object

Everything in { } is treated as codeblock by javascript

Javascript automatically puts in semi colon at the end of line ";"
So use ( ) to pack in multiline code.

Truthy Falsy --> condition && output    // if condition true then output

https://codewithmosh.com/courses/324741/lectures/5088078
Primitives are copied by value. Value in memory is changed
Objects are copied by reference. Same space in memory, just pointer differ.

////// Variables - Mutable
var hello = 1;                  // Not used now.
let number = 1;
let firstName = "Manasvi";      // Camel Notation
class CircleShape {};           // Pascal Notation

let a, v;

////// Constants - Immutable
const number = 1;     

////// Primitives
String, Number, Boolean, undefined, null

typeof anyVar       // Gives the type of the variable
typeof undefined is also undefined

////// Reference Types - Object, Array and Function
// Objects

let someObject = {
    name: 'Manasvi',
    age: 30
}

someObject.name      // Dot notation
someObject['age']    // Bracket notation

// Arrays
let selectedColors = ['red','blue']

selectedColors[2] = 12234;  // Type can be changed in single array

selectedColors[0];
selectedColors[1];
selectedColors[2];

// Default properties in arrays
every, fill, filter, find, findIndex, forEach, includes, indexOf, 
join, keys, lastIndexOf, map, pop, push, splice, length

// Functions
function any(input1, input2) {return input1+input2};     // inputs here called parameters
any(1,2);                                                // inputs here called arguments

/*
/////// Operators - https://codewithmosh.com/courses/324741/lectures/5087933
Operators Variables --> Expressions --> Algorithms

Arithmetic:     + - * / % ** ++ --
Assignment:     = += -= *= /= %=
Comparison:     == === !== <= >= < >
Ternary:        condition ? ifTrue : ifFalse
Logical:        && || !
Bitwise:        & |     // https://codewithmosh.com/courses/324741/lectures/5087943

/////// Control Flow
if else         -- Usual
switch case     -- case break, case break, default.
for             -- for (let i=0; i<5; i++){}
while           -- Executes only if condition matches
do while        -- Executes atleast once, even if condition is false
for in          -- For list/ array - for (let key in personList){}
for of          -- New way, ES6 -> for (let color of colors){}  -- here the problem of using key is gone.
break           -- Exits and end the loop. 
continue        -- Continues to next iteration, skipping present, does not end the loop.
*/

/////// OOP - https://codewithmosh.com/courses/324741/lectures/5088069
// Factory Function - Uses Camel Notation

function createCircle(radius) {
    return {                        // Notice we use "return" here
        radius:radius,
        draw(){},
        delete(){},
    };
}

const c1 = createCircle(1);         // We do not use "new"
c1.constructor                      // Gives an object in return

// Constructor Function - Pascal Notation

function Circle(radius) {           // No "return" in the start
    this.radius = radius;
    this.draw = function(){}
}

const c2 = new Circle(1);           // "new" is used
c2.constructor                      // Gives Constructor function in return

// Dynamic Nature of Objects
// While we use const c2 = ... c2 can not be re-assigned, but internal properties can be changed

We can do the following if needed:
c1.color = 'yellow'
c2.draw = function(){}

We can also delete them
delete c1.color
delete c2.radius

// Functions are Objects - https://codewithmosh.com/courses/324741/lectures/5088081

Circle.call({}, 1)      // Internally this happens when we use --> const c2 = new Circle(1)
Circle.apply({}, [1])   // Same as call, but uses array as input to empty object
Circle.bind({})()       // Not Sure, watch this https://codewithmosh.com/courses/324741/lectures/5142769 and https://codewithmosh.com/courses/357787/lectures/5634560

// Enumerating Objects in various ways - https://codewithmosh.com/courses/324741/lectures/5088080

const circle = { 
    radius : 1,
    draw(){}
}
for (let key in circle)                 // Note the "in"
    console.log(key, circle[key])

for (let key of Object.keys(circle))    // Note the "of"
    console.log(key)

for (let entry of Object.entries(circle))    // Note the "of" and we use Object.entries not keys
    console.log(entry)

Explore Object.    <-- all properties of Object in vscode to see whats available

if ('radius' in circle) console.log('yes')      // Check if property in an object using "in"

// Clone an Object - 3 ways - https://codewithmosh.com/courses/324741/lectures/5088079

const another1 = Object.assign({}, circle); // Using assign. Example seen in composition
const another2 = {...circle}                // Using spread operator

const another3 = {};                        // Using a loop, very dumb, never used.
for (let key in circle)
    another3[key] = circle[key]
    
//////// Arrays which means [ ] not {}, which is object
push()
pop()
splice()
unshift()
shift()
concat() or [...first, ...second, [1,2,3]]  // packing unpacking in python uses * instead of ...
slice(2,6)  // start 2 till 6. Note, its not after 2 choose 6 more, like in SQL. Its like python.
forEach( (input) => {return} )  // takes in a function

join('delimiter')   // joins item into string. 
split('delimiter')  // Array method. Convert string to array with this
// split and join are used a lot together

Sorting array: https://codewithmosh.com/courses/324741/lectures/5088108
sort()                       // for simple [1,2,3,4]
sort(function(){})           // for [{},{},{}] and use 
reverse()

// Testing Array - Not supported by every browser
https://codewithmosh.com/courses/324741/lectures/5088105
every()     // Returns true or false. Checks every element in array
some()      // Returns true or false. Stops at first item which meets condition

filter(value, index, array)     // Returns array
map(value, index, array)        // map each item to something

https://codewithmosh.com/courses/324741/lectures/5088110
map and join are used together a lot. Also filter and map.

// Example of chaining filter and map
const num = [1,-1,2,3]

const items = num
    .filter(n => n >= 0)            // return +ve values
    .map(n => ({value:n}) )         // create object with given values. Notice we did not use {value:n} directly, rather put them between (). This is because javascript thinks that {} is a code block, so treats like it. When we put them bewteen ({}) then it treats like an object.
    .filter(obj => obj.value >1)    // again filter on result
    .map(obj => obj.value);         // again map to give a array this time. Above we created object, here we created array with map method.
    
https://codewithmosh.com/courses/324741/lectures/5088113
reduce((accumulator, currentValue) => {logic conditions}, 0);   // To sum all items in array, we can use loop OR reduce function
// 0 is the initial value of accumulator. Then for each value in array, we can add/ sub/ divide etc or any other operation on the accumulator using each value.

// Default values in function - https://codewithmosh.com/courses/324741/lectures/5142777

// Before ES6
function anyName(a,b,c){
    b = b || 2;
    c = c || 5;
    
    return a*b*c;
}

anyName(1,2,3);

// Now after ES6
function anyName(a,b=2,c=5){        // Note, all values after 1st default value, like b, should also have default value.
    return a*b*c;
}

anyName(1);

///////// Error handling Try Except //////////// - https://codewithmosh.com/courses/324741/lectures/5142778

Logic flow is. Once throw Error is reached, try block is stopped and catch block is enabled.

if (typeof value != 'string')
    throw new Error('value is not a string');
    
try{ 
    code here 
} 
catch(e) {
    alert or console.log
}


/////////// Enums ///////////

https://www.youtube.com/watch?v=nPrHbLsqb54

Heard about enums in Solidity for the first time. Python uses in classes, java has this core built in.

Whenever we wish to choose between certain items, which can not be edited by end user,
enums are used. They are always in CAPITALS in snake-case.

const DIFFERENT_OPTIONS = Object.freeze({
    STATE_A: "Program Started",
    STATE_B: "Program Running",
    STATE_C: "Program Ended"
})

DIFFERENT_OPTIONS.STATE_A = "Something Else";   <--- This wont work coz we use Object.freeze

let myProgramState = DIFFERENT_OPTIONS.STATE_A;


