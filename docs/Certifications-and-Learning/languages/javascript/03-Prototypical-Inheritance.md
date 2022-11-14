# Contents

- [Prototypical Inheritance](#Prototypical Inheritance)
- [Calling Super Constructor](#Calling Super Constructor)
- [Intermediate Function Inheritance](#Intermediate Function Inheritance)
- [Method Overriding](#Method Overriding)
- [Polymorphism](#Polymorphism)
- [Mixins](#Mixins)

# Prototypical Inheritance

https://codewithmosh.com/courses/310571/lectures/4881270

```javascript
function Shape(){
}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle(radius) {
    this.radius = radius
}

Circle.prototype.draw = function() {
    console.log('draw')
}

const s = new Shape()
const c = new Circle(1)
```

We have shape object and circle object.
Default is circle <- proto root
We want circle <- proto shape <- proto root

Default under the hood --> Circle.prototype = Object.create(Object.prototype)
We change to --> 
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Cricle // Always update constructor when resetting prototype.

In ES6 we simple use extends, and above need not to be done.
This way the chaining has been changed.

> Always update the constructor when resetting prototypes, else there could be weird issues https://codewithmosh.com/courses/310571/lectures/4881275

# Calling Super Constructor
https://codewithmosh.com/courses/310571/lectures/4881274

In any object, if you want to call members of other object, use call method.

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

# Intermediate Function Inheritance
https://codewithmosh.com/courses/310571/lectures/4881276

So when we define a function to reset constructor proto, its called intermediate function inheritance.

function extend(Child, Parent) {
    Parent.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

# Method Overriding
https://codewithmosh.com/courses/310571/lectures/4881277

# Polymorphism
https://codewithmosh.com/courses/310571/lectures/4881278

# Mixins
const person = Object.assign({}, canEat, canWalk)

https://codewithmosh.com/courses/310571/lectures/4881280
https://codewithmosh.com/courses/310571/lectures/4881279

Inheritance is very fragile.
Becomes complex very fast.
And makes your code hard to read.
Also, when a new object type is introduced, the inheritance tree can break.

Composition is another technique.
Always use composition over inheritance if possible.

Method - 
1. We create methods, like canWalk, canEat, canSwim
2. Then we create object, like Fish, Dog, Human
3. then we we assign Object.assign(Fish.prototype, canEat, canSwim) etc

The above is called Composition, when we compose a final object from combining others.

When we do it using a function, we call it mixins.

function mixin(target, ...sources){     // Using rest operator ... to get n number of inputs
    Object.assign(target, ...sources)   // Using spread operator ... to access each element in a array
}

Yes, rest and spread operator looks same, they are kind off......


