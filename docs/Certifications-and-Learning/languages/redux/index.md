# Contents

- [Intro](#Intro)
    - [Basic File Structure](#Intro#Basic File Structure)
- [Functional Programming](#Functional Programming)
    - [Functions are First Class Citizens](#Functional Programming#Functions are First Class Citizens)
    - [Higher Order Functions](#Functional Programming#Higher Order Functions)
    - [Function Composition](#Functional Programming#Function Composition)
    - [Composing and Piping](#Functional Programming#Composing and Piping)
    - [Currying](#Functional Programming#Currying)
    - [Pure Functions and Immutability](#Functional Programming#Pure Functions and Immutability)
        - [Updating objects](#Functional Programming#Pure Functions and Immutability#Updating objects)
        - [Updating Arrays](#Functional Programming#Pure Functions and Immutability#Updating Arrays)
        - [Enforcing Immutability](#Functional Programming#Pure Functions and Immutability#Enforcing Immutability)
- [Redux Fundamentals](#Redux Fundamentals)
    - [Three Building Blocks](#Redux Fundamentals#Three Building Blocks)
    - [Building redux - steps](#Redux Fundamentals#Building redux - steps)
    - [Files Needed](#Redux Fundamentals#Files Needed)
    - [Design Store](#Redux Fundamentals#Design Store)
    - [Define Actions](#Redux Fundamentals#Define Actions)
    - [Create Reducer](#Redux Fundamentals#Create Reducer)
    - [Set up the Store](#Redux Fundamentals#Set up the Store)
    - [Dispatching and Subscribing Actions](#Redux Fundamentals#Dispatching and Subscribing Actions)
    - [Action Types](#Redux Fundamentals#Action Types)
    - [Action Creators](#Redux Fundamentals#Action Creators)
- [Redux Dev Tool](#Redux Dev Tool)
- [Clean Redux Code](#Clean Redux Code)
    - [Project Structure Recommended](#Clean Redux Code#Project Structure Recommended)
        - [Intuitive](#Clean Redux Code#Project Structure Recommended#Intuitive)
        - [Ducks Pattern](#Clean Redux Code#Project Structure Recommended#Ducks Pattern)
    - [Redux Toolkit](#Clean Redux Code#Redux Toolkit)
        - [Store](#Clean Redux Code#Redux Toolkit#Store)
        - [Actions](#Clean Redux Code#Redux Toolkit#Actions)
        - [Reducers](#Clean Redux Code#Redux Toolkit#Reducers)
        - [Slices - FINAL BEST WAY](#Clean Redux Code#Redux Toolkit#Slices - FINAL BEST WAY)
- [Advance](#Advance)
    - [Designing a store](#Advance#Designing a store)
        - [Combine Reducers](#Advance#Designing a store#Combine Reducers)
        - [Normalization](#Advance#Designing a store#Normalization)
        - [Selectors and Memoizing Selectors](#Advance#Designing a store#Selectors and Memoizing Selectors)
- [Middleware](#Middleware)
    - [Basic use](#Middleware#Basic use)
    - [Parameterizing Middleare](#Middleware#Parameterizing Middleare)
    - [REDUX THUNK](#Middleware#REDUX THUNK)

# Intro


Flux by facebook
Redux - Inspired by Flux
Mobx

Single Source of Truth.
Central State Management.

Strength 
- How data changed and track UI state change for troubleshooting
- Time Travel Debugging - Redux dev tools
- Log Rocket tool - for tracking and time travel debugging
- Save any state and load later
- Preserve and Cache states, to prevent re-download or reload

Pros:
Predictable state changes, 
Centralised state, 
easy debugging, 
preserve page state
undo/redo
Ecosystem of add-ons

Cons:
Complexity is high
Very verbose.

## Basic File Structure
actiontypes.js  // Action Types are named here and exported.
actions.js      // Action functions are here, actionTypes imported here.

reducer.js      // Reducers defined here. Switch cases, actions imported here.
store.js        // Store is defined here. Import redux lib and createStore from the reducer.js.
index.js        // All interactions done here. Dispatch and Subscriptions.

# Functional Programming
https://codewithmosh.com/courses/783424/lectures/14780302

Decomposing a program into many smaller functions and then building larger functions.
Clojure and Haskell are purely functional programming languages.

## Functions are First Class Citizens
When we can
1. Define function as variable
2. Return function from a function
3. Input function as a variable into another function.

```javascript
// Example 1
function sayHello() {}
let fn = sayHello       // Not calling function, just refencing it into an object.

fn()        // Same as below
sayHello()

//Example 2
function funA(){
    return function() {
        return "Hello";
    }
    
let fn = funA();        // Returns internal function.
let message = fn();     // Calling the defined function.
}
```

## Higher Order Functions

If a function takes a function as argument or return function or both.

Below in javascript are higher order functions
.map
setTimeout()

## Function Composition

```javascript
let input = "    Hello   ";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()

const result = wrapInDiv(toLowerCase(trim(input)));

// NOTE above too much wrapping and reading from right to left
```

## Composing and Piping

```bash
yarn add lodash
```

Refer above code
```javascript
import {compose, pipe} from "lodash/fp";

let input = "    Hello   ";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()

//const transform = compose(wrapInDiv, toLowerCase, trim) // to much wrapping is solved, but still read from right to left
const transform = pipe(trim, toLowerCase, wrapInDiv)    // This is the best, no wrapping and read left to write.

transform(input);
```

## Currying
https://codewithmosh.com/courses/783424/lectures/14780300

Reducing the number of input parameters variables in a function to single parameter, by making nested functions.

Now in the above example, pipe function takes in only functions with no varibales.
How to we pass variables?
We use currying, where we create function within function and pass 1 variable per function.

```javascript
function add(a){
    return function(b){
        return a+b
    }
}

add(1)(5)   // Instead of doing add(1,5), we do (1)(5). Meaning calling function, then inner function then inner....

const add2 = a => b => a+b  // instead of (a,b) => a+b, we use this.
```

Our Example:
```javascript
import {compose, pipe} from "lodash/fp";

let input = "    Hello   ";

const trim = str => str.trim();
//const wrap = (type,str) => `<${type}>${str}</${type}>`     // Instead of this
const wrap = type => str => `<${type}>${str}</${type}>`    // Do this
const toLowerCase = str => str.toLowerCase()

const transform = pipe(trim, toLowerCase, wrap("div"))    // Now we can pass two variables

transform(input);
```

## Pure Functions and Immutability
https://codewithmosh.com/courses/783424/lectures/14780287

If a function takes an argument and always gives the same output, then its pure.
We can not mutate parameters in pure functions.
Example MATH.random, datetime etc are not pure functions.

Pros:
Self-documented
Easily testable
Concurrency
Cacheable

In javascript const items can not me mutated. But arrays can be mutated by changing values with in.
Hence javascript is a multi paradigm language.

If we can not mutate a variable once defined, its called immutability and that is a good thing.

Why good?
Predictability
Faster Change Detection
Concurrency

Cons
Performance issue when large number of objects
Memory overhead

### Updating objects
https://codewithmosh.com/courses/783424/lectures/14780289

Shallow vs Deep Copy

```javascript
const person = {name: "Hello",
                address: {
                    state: "Haryana",
                    city: "Gurugram"
                }}

// Shallow copy. Here creating a new object then changing it also changes the parent.
const updated = Object.assign(...person, name: "Bye")

// Deep copy. Now we created a full copy, and this object is independent from parent.
const updated = {
        ...person,      // Copy on level
        address: {
            ...person.address   // copy second level
        },
        name: "Bye")        // Changing a value 
        }
```

### Updating Arrays
https://codewithmosh.com/courses/783424/lectures/14780298

### Enforcing Immutability
Good Libraries
Immutable - https://codewithmosh.com/courses/783424/lectures/14780290
Immer - https://codewithmosh.com/courses/783424/lectures/14780301
Mori

Immer is preferred.

# Redux Fundamentals

https://codewithmosh.com/courses/783424/lectures/14780381

yarn add redux

## Three Building Blocks

1. Store   (where we store)
2. Action  (should be called events)
3. Reducer (a function that handles store and action. Like an event handler)
        "Event handler" name is used in context when we do mutations, but in 
        functional programming, we deal with immutables, hence instead of
        event handler, a new name was needed, and we called it reducer.

## Building redux - steps

1. Design Store
2. Define Actions
3. Create Reducers
4. Set up the Store
5. Dispatching Actions and Subscribing Actions

## Files Needed
actiontypes.js  // Action Types are named here and exported.
actions.js      // Action functions are here, actionTypes imported here.

reducer.js      // Reducers defined here. Switch cases, actions imported here.
store.js        // Store is defined here. Import redux lib and createStore from the reducer.js.
index.js        // All interactions done here. Dispatch and Subscriptions.

## Design Store
https://codewithmosh.com/courses/783424/lectures/14780373

[
    {
        id:1,
        desc: "",
        resolved: false
    },
    {...},  //Object
    [...],  //Or Array
    [...],
]

## Define Actions
https://codewithmosh.com/courses/783424/lectures/14780377

Add, Mark Resolve, Delete etc etc anything

{
    type: "bugAdded",       // many people use BUG_ADDED
    payload: {              // The miniman amount of information for the action
        id: 1,
        description: "Something meaningfull"
    }
}


## Create Reducer

```javascript
// reducer.js
function reducer(state = [], action){   // We use state = [] else, javascript will make it undefined
    
    switch (action.type){
        
        case "bugAdded":
            return ........
        case "bugRemoved":
            return ........
        default:
            return state
    
    }
}

export default reducer
```

## Set up the Store

```javascript
//store.js

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store
```

## Dispatching and Subscribing Actions
https://codewithmosh.com/courses/783424/lectures/14780384
https://codewithmosh.com/courses/783424/lectures/14780375

```javascript
// index.js

import store from './store';
console.log(store)

/////////////////// Subscribe
// NOTE: Subscribe function returns a function called unsubscribe
//       Which can be called later to remove subscription.
//       Pretty Weird!
const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed", store.getState())
})

/////////////////// Dispatch
// We will get notification for the below action bevause we subscribed above
store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
})

unsubscribe()               // Calling this will unsubscribe. READ WEIRD NOTE ABOVE!

// We will not get notification now for below action
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: "1"
    }
})

console.log(store.getState())

```

## Action Types

```javascript
//actionTypes.js

export const BUG_ADDED = "bugAdded"
export const BUG_REMOVED = "bugREMOVED"
```

```javascript
//Everywhere in reducer.js and index.js

import * as actions from './actionTypes';

//replace "bugAdded" with actions.BUG_ADDED
//replace "bugRemoved" with actions.BUG_REMOVED

}
```

## Action Creators
https://codewithmosh.com/courses/783424/lectures/14780380

```javascript
// actions.js
import * as actions from './actionTypes';

export function bugAdded(desc) {
    return {
        type: actions.BUG_ADDED,
        payload:{
            desc: "Bug1"
        }
    }
}
```
# Redux Dev Tool
https://codewithmosh.com/courses/783424/lectures/14780553



# Clean Redux Code

## Project Structure Recommended
https://codewithmosh.com/courses/783424/lectures/14780635

### Intuitive
src
    store
        auth
            actions.js
            actionTypes.js
            reducer.js
        bugs
        projects
        etc

### Ducks Pattern
https://codewithmosh.com/courses/783424/lectures/14780632

Here actions, actionTypes and reducer moved to single FILE as per role.

src
    store
        auth.js
        bugs.js
        projects.js
        etc etc



## Redux Toolkit
Use this instead of redux. Many helpful functions.

Download - https://codewithmosh.com/courses/783424/lectures/14780626

### Store
https://codewithmosh.com/courses/783424/lectures/14780629

```javascript
// configureStore.js which was store.js

import { configureStore } from "@reduxjs/toolkit";
import reducer from './bugs';

export default function() {
    return configureStore({reducer});
}

```

### Actions
https://codewithmosh.com/courses/783424/lectures/14780628

```javascript
// bugs.js
import { createAction } from "@reduxjs/toolkit";

//Basic example:
//const action = createAction("bugUpdated")
//console.log(action(payload)) // Payload can be object, variable anything

// Action Types - Not Needed anymore, as action.type or action.toString() gives the name
// Action Creators
const bugAdded = createAction("bugAdded")
const bugRemoved = createAction("bugRemoved")
const bugResolved = createAction("bugresolved")

//Reducer - this is where switch statement for various cases was used.
case bugAdded.type:     // Instead of case BUG_ADDED
case bugRemoved.type:     // Instead of case BUG_REMOVED
case bugResolved.type:     // Instead of case BUG_RESOLVED
```

###Reducers
https://codewithmosh.com/courses/783424/lectures/14780633

```javascript
// bugs.js
import { createAction, createReducer } from "@reduxjs/toolkit";

// Action Creators
const bugAdded = createAction("bugAdded")
const bugRemoved = createAction("bugRemoved")
const bugResolved = createAction("bugresolved")

//Reducer - this is where switch statement for various cases was used.
export default createReducer([], {
    bugAdded: (state, action) => { state.push({ STATE_GOES_HERE }) },           // Directly refer the var name
    [bugRemoved.type]: (state, action) => { state.push({ STATE_GOES_HERE }) },  // Of refer by .type
    [bugResolved.type]: (state, action) => { state.push({ STATE_GOES_HERE }) }  // Both ways allowed, .type preferred; coz we can change creatAction("Name") anytime.
})

```


### Slices - FINAL BEST WAY
https://codewithmosh.com/courses/783424/lectures/14780630

This is a combination of Actions and Reducers all at once
    

```javascript
// bugs.js
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {bugs.push({ STATE_GOES_HERE })},
        bugRemoved: (bugs, action) => {bugs.push({ STATE_GOES_HERE })},
        bugResolved: (bugs, action) => {bugs.push({ STATE_GOES_HERE })}
    }
})

export const {bugAdded, bugRemovec, bugResolver} = slice.actions;
export default slice.reducer;

// Action Creators -- Not Needed Now
// Reducers -- Not Needed Now

```

# Advance

## Designing a store

### Combine Reducers
https://codewithmosh.com/courses/783424/lectures/14780682

NOTE: Concept of entities reducer in video, but not written here.
What is done is, we make multiple files of conbineReducers, which has similar relating reducers.
Then we create a Parent combineReducer to combine them all.
This helps in debugging.

```javascript
//reducer.js
import { combineReducers } from "redux";
import reducerA from "./A";                 // Made using slices
import reducerB from "./B";                 // here we have many reducers
import reducerC from "./C";

export default combineReducers({
    A: reducerA,
    B: reducerB,
    C: reducerC
})

//configureStore.js

import reducer from "reducer";

```
### Normalization
https://codewithmosh.com/courses/783424/lectures/14780675

git link - paularmstrong / normalizr

### Selectors and Memoizing Selectors
https://codewithmosh.com/courses/783424/lectures/14780679

yarn add reselect 

```javascript
//bugs.js
import { createSelector } from "reselect";

createSelector (
    state => state.entities.bugs,
    state => state.entities.projects,           // Include all reducers here
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

```


# Middleware

Use?
* Calling APIs
* Error Reporting
* Analytics
* Autherization

https://codewithmosh.com/courses/783424/lectures/14780721

## Basic use
Image we making a logger

```javascript
//middleware/logger.js

const logger = store => next => action => {     // Using currying here. Remember as SNA
    console.log("store", store);
    console.log("next", next);
    console.log("action", action);
    
    next(action);
};
export default logger;

//configureStore.js

import logger from "./middleware/logger"

export default function() {
    return configureStore({
        reducer,
        middleware: [logger]        // Any number of middlewares
    })
}

// We we do not use redux toolkit, then
// index.js

import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer, applyMiddleware(logger)); //applyMiddleware is called Store Enhancer

```

## Parameterizing Middleare
https://codewithmosh.com/courses/783424/lectures/14780719

```javascript
//middleware/logger.js

const logger = param => store => next => action => {    // Notice param added
    console.log("Logging", param);                      // notice param
    
    next(action);
};
export default logger;

// configureStore.js
export default function() {
    return configureStore({
        reducer,
        middleware: [logger("console")]                 // A change here, now we can give in arguments
    })
}
```

## REDUX THUNK
https://codewithmosh.com/courses/783424/lectures/14780722

Something to do with dispatching functions, to handle async, api calls etc.
Not sure, and dont have energy to understand it.
See it later.
