# Contents

- [Prototypes](#Prototypes)
- [Prototypical Inheritance](#Prototypical Inheritance)
- [Multilevel Inheritance](#Multilevel Inheritance)
- [Prototype Descriptors](#Prototype Descriptors)
- [Constructor Prototypes](#Constructor Prototypes)
- [Prototype vs Instance Members](#Prototype vs Instance Members)
- [Iterating instance and prototype members](#Iterating instance and prototype members)

# Prototypes

All about inheritance.

In javascript we do not have classes, we only have objects.
So how does inheritance work??!

Classical VS Prototypical Inheritance
Javascript used Prototypical Inheritance

NOTE: After this you understand how to change javascript built in objects.
Do not edit built in objects! Its always good not to touch objects you do not own.

# Prototypical Inheritance
https://codewithmosh.com/courses/310571/lectures/4881218

Whenever an object is created in Javascript, it inherits from the root object base, called prototype.

> Prototype is just a regular Object! always know it. Everything is object in javascript.

```javascript
let x = {}
let y = {}

Object.getPrototypeOf(x) === Object.getPrototypeOf(y) // gives true
x.__proto__ === y.__proto__     // This has been depreciated, should not be used
```

# Multilevel Inheritance
If we define array, it inherits from array prototype, which inherits from root prototype
If we create instance of our own object, its prototype is the object we defined, which inherits from the root prototype.

So in javascript, chain of inheritance occurs, which always roots to root prototype.

# Prototype Descriptors
https://codewithmosh.com/courses/310571/lectures/4881220

let person = {name: "Manasvi"}
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString')
console.log(descriptor)

```javascript
let person = {name: "Manasvi"}

Object.defineProperty(person, 'name', {     // Be default all 3 are true
    writable: true,             
    enumerable: true,
    configurable: true
})
```

# Constructor Prototypes

# Prototype vs Instance Members
https://codewithmosh.com/courses/310571/lectures/4881222

For each instance created from object, we will have all parent methods copied.
This can result into memory issues.
Hence we define methods at prototype level, so that only once instance is created in memory.


```javascript
function Circle(radius) {
// These are instance members
this.radius = radius;

this.move = function() {
    //this.draw()           // Note: We accessing protype member here.
    console.log('move')
}
}

//These are prototype members
Circle.prototype.draw = function() {
    this.move()             // Note: Here we using an instance member at protoype level
    console.log('draw');
}

// NOTE: in above example, we have instance access proto method and proto access instance member. This create a circular reference, shown only as example that this can be done.


const c1 = new Circle(1)
const c2 = new Circle(1)

// Below root prototype method toString is changed as per our need.
Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

```

# Iterating instance and prototype members

console.log(Object.keys(c1)); // Only returns instance members

for (let key in c1) console.log(key); // Returns instance + prototype members

c1.hasOwnProperty('radius') // True to instance members
c1.hasOwnProperty('draw')   // False for prototype members


