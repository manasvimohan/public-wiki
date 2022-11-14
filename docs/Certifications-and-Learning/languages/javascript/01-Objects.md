# Contents

- [Objects](#Objects)
- [Object Literals](#Object Literals)
- [Factories](#Factories)
- [Constructors](#Constructors)
- [Constructor Property](#Constructor Property)
- [Functions are also Object](#Functions are also Object)
- [Value types and Reference Types](#Value types and Reference Types)
- [Enumerating Properties](#Enumerating Properties)
- [Abstraction](#Abstraction)
    - [Getters and Setters](#Abstraction#Getters and Setters)

# Objects
https://codewithmosh.com/courses/310571/lectures/4881076

In javascript, everything is all about objects.

# Object Literals
const   - Block level scope and can not be changed. Always use this.
let     - Block level scope and can be changed. If you want to change the variable for some reason, then use this.
var     - This has functional level scope, and should not be used now.

# Factories
It has a constructor function.
Does not have this.something etc.
We do not use "new" while defining new instance.

# Constructors
Like factory, but uses this.something.
We use "new" to define new instance.

# Constructor Property
anything.constructor <-- shows us what anything is made of

new String()
new Boolean()
new Number()

We have all these. Everything is an object.

# Functions are also Object
if "Circle" is a constructor, then to create a new instance we can use either of the two below:

const another = new Circle(1);  <-- Normally done
Circle.call({},1)               <-- Under the hood this happens
Circle.apply({},[1,2,3,4])      <-- Same as call, but here we pass arguments in []

Above three are same.

# Value types and Reference Types
https://codewithmosh.com/courses/310571/lectures/4881080

Value Types - Number, String, Boolean, Symbol, Undefined, Null
Reference Types - Object, Function, Array

Primitives are copied by their value
Objects are copied by their reference

# Enumerating Properties
Assume circle is an instance of an object called Circle.

```javascript
// Method 1
for (let key in circle){
    if (typeof circle.[key] !== 'function')
        console.log()
}

// Method 2
const keys = Object.keys(circle);
console.log(keys)

// Method 3
if ('radius' in circle)
    console.log('Circle has a radius.')
```

# Abstraction
https://codewithmosh.com/courses/310571/lectures/4881071

Using this.something, the methods and properties can be accessed by the user of the object.
However we would like to hide it. 
Instead of this.anything.... we use let/ const to define things. Just like factory.

In nutshell, making vars and funcs private to the class, instead of letting user use them directly.

## Getters and Setters

Get makes something accessible from outside and is read only.
To be able to change property from outside, we use setter.
Object.defineProperty(this, 'defaultLocation',{ 
    get: function() {           // Getter, read property, read only
        return something;
    },
    set: function(value){       // Setter, make possible to change value.
        if (!value.x || value.y)        // Showing that we can add validations too
            throw new Error('Invalid Location')
            
        something = value       // Without setter, something is read only
    }
})


