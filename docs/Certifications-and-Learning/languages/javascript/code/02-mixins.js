// https://codewithmosh.com/courses/310571/lectures/4881279
// Here course uses ES5, and we are on ES6
// hence note here we do not use "class" rather plain old const or function

// Example of composition, and why inheritance is not always useful

// 1 define any number of features, or add in the future
const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canFly = {
    walk: function() {
        console.log('flying');
    }
};

const canSwim = {
    walk: function() {
        console.log('swimming');
    }
};

// Composing them in various combinations to create whatever we need

// Method 1 - with empty array/ object {}

const human = Object.assign({}, canEat, canWalk, canSwim);
const bird = Object.assign({}, canEat, canWalk, canFly);
const fish = Object.assign({}, canEat, canSwim);
const coronaVirus = Object.assign({}, canFly, canSwim);

// Method 2 - Adding to a class

function Person(){
    many things...
    many things...
    many things...
}

Object.assign(Person.prototype, canEat, canWalk, canSwim)

const person = new Person();    // This has canEat, canWalk, canSwim along with its own class vars and methods

// Wrapping into a mixin

function mixin(target, ...sources){     // ... called rest. Take in anything
    Object.assign(target, ...sources)   // ... called spread. Spread our everything taken.
}

// Mixin Usage

mixin(Person.prototype, canEat, canWalk, canSwim);
const person = new Person();

mixin(Fish.prototype, canEat, canSwim);
const person = new Person();

mixin(Bird.prototype, canEat, canWalk, canFly);
const person = new Person();

