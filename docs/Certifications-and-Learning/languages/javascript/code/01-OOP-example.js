// Class is just a syntactic sugar, in core everything is still objects

////////// General Format ///////////

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function (){}
    }
    
    // Instance method
    draw() {}
    
    // Static Method - Can be called from class, not from instance.
    // 
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
    
}

const c = new Circle(1) // If we forget "new", then "this" in each class will refer to window object, not the class.

////////// ABSTRACTION ////////////
// Purpose is to make radius private to class and user should not be able to access it directly.
// In python, we use double underscore like "__name" in the class itself. Here we define a symbol.

// Using Symbol
const _radius = Symbol()  // Note Symbol() === Symbol() gives false. Meaning each instance is different.
const _draw = Symbol()

class Circle {
    constructor(radius) {
        this[_radius] = radius;     // Private variable
    }
    
    [_draw] () {}                   // Private function
}

const c = new Circle(1)

// Try below to check
const a = Object.getOwnPropertyNames(c)
const key = Object.getOwnPropertySymbols(c)
console.log(a)          // We cant see radius
console.log(c[key])     // we can see radius

// Using multiple Weakmap - https://codewithmosh.com/courses/310571/lectures/4881371
const _radius = WeakMap()   // A kind of dictionary, where keys are objects and values anything. If no reference to the keys, they are garbage collected, hence weak in the name. 
const _draw = WeakMap()
class Circle {
    constructor(radius) {
        _radius.set(this, radius);              // Setting variable.
        _draw.set(this, () => {} );             // Setting function. Using arrow function, so that "this" refers class.
        //_draw.set(this, function(){});       // Ok to use but, "this" refers window object not the class.
    }
    
    somePublicMethod() {                        // A public method, which users can use.
        console.log(_radius.get(this))          // Access variable
        console.log(_draw.get(this) () )        // Run Private Method
    }
}

const c = new Circle(1)

// Using a single weakmap

const privateProps = WeakMap() 

class Circle {
    constructor(radius) {
    privateProps.set(this, {
        radius: radius,
        draw: () => {},
        move: () => {},
        jump: () => {},
        height: radius*5
    });
    }
    
    somePublicMethod() {              
        console.log(privateProps.get(this).radius)
        console.log(privateProps.get(this).draw())
        console.log(privateProps.get(this).jump())
    }
}

const c = new Circle(1)

////////// Getter and Setter /////////// - https://codewithmosh.com/courses/310571/lectures/4881372
// Exposing private variables to user using get and set
// instead of using c.radius() we want to access radius as property, meaning like c.radius without ()

const _radius = WeakMap();

class Circle {
    constructor(radius){
        _radius.set(this, radius);
    }
    
    get radius(){                 // Adding get, infront of a method, we can call it using c.radius instead of c.radius()
        return _radius.get(this)  // which is like a property, rather than a method
    }
    
    set radius(value){            / Allow user to set private variable only under constraints and conditions
        if (value<=0) throw new Error('Invalid Radius');        // Can not set if negative
        _radius.set(this,value)                                 // Set the value if condition is met
    }
}

const c = new Circle(1);
//console.log(c.radius())         // Default way, we dont want to use this
console.log(c.radius)           // Works fine because we added "get" infront of the method in the class

////////// INHERITANCE /////////// - https://codewithmosh.com/courses/310571/lectures/4881373

// Without constructor in parent class
class Shape {
    move() {};
}

class Circle extends Shape {        // "extends" keyword for inheritance
    draw() {};
}

const c = new Circle();

// we have both method available now
c.move()
c.draw()

// With constructor in parent class and child also want to inherent it
class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {};
}

class Circle extends Shape {        
    constructor(color, radius){     // Color from parent, radius for only child
        super(color);               // We added color from parent class
        this.radius = radius;       // Added child only variable
    }
    draw() {};
}

const c = new Circle('red',5);

// we have both method available now
c.move()
c.draw()

////////// Method Overriding ////////// - https://codewithmosh.com/courses/310571/lectures/4881374

class Shape {
    move() {};
}

class Circle extends Shape { 
    draw() {};
    //move() {};                  // Overriding move function in parent, with one in child here. Parent move not used.
    move() {                    // If we need to use parent move and child move both, we use "super"
        super.move();
    };                  
}

const c = new Circle();
c.move()                        // This uses move from child and not parent


///////////////////////////////////////////////////
/////////////////////////////////
// Other Details

// Function Declaration - Hoisted. Raised to top of the code before execution. No need for ";"
function sayHello() {}

// Function Expression - Not Hoisted. They run in sequence. We need ";" here
const sayGoodbye = function() {};
const ab = 5;

// Class Declarations - Not Hoisted
class Circle {
}

// Class Expression - Not Hoisted
const Square = class {
};

// Method Call - calling from an instance. Here "this" points to class 
const c = new Circle()
c.draw();

// Function Call - calling function directly. Here "this" points to window object. To prevent this, we use 'use strict'
draw();


