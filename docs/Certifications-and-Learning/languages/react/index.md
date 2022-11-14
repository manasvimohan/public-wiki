# Contents

- [React](#React)
- [VS Code Setup](#VS Code Setup)
- [Basic](#Basic)
- [Components](#Components)
    - [Basic](#Components#Basic)
    - [Advance](#Components#Advance)
- [Pagination, Sorting and Filtering - Client Side](#Pagination, Sorting and Filtering - Client Side)
- [Routing](#Routing)
- [Forms - Login, add item and Search Box based filtering](#Forms - Login, add item and Search Box based filtering)
- [Calling back end services](#Calling back end services)
- [Authentication and Authorization](#Authentication and Authorization)

# React

https://codewithmosh.com/courses/357787/lectures/5634521

The course focuses on class based components.
While today, people use functional based components. Its ok, basics are same.

Functional Component Video - https://codewithmosh.com/courses/357787/lectures/5634720

Read the difference here - https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/

# VS Code Setup
Simple React Snippets - Burke Holland
    imrc
    imr
    cc
    ccc
    sfc
Prettier - Esben Petersen
Auto Import - ES6, TS, JSX, TSX - Sergey Korenuk

Multi curser editing - ctrl + d

Markup generation, also called Zen Coding - https://codewithmosh.com/courses/357787/lectures/5634619
table.table>thead>tr>th*4
div>div.classname>div.subclassname>a*4

# Basic
create-react-app appName

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

```javascript
// Most Basic example of map
const num = [1,2,3]
const out = num.map(each => `<li>${each}</li>`)

// Object Destructuring
const arr = {a:'',b:'',c:''}
const {a,b,c} = arr

// Spread
const obj1 = {name: 'A'}
const obj2 = {age: 10}
const comboObj = {...obj1, ...obj2, location: 'India'}

const array1 = [1,2,3]
const array2 = [4,5,6]
const comboArray = [...array1, [9,8,7], ...array2]  
```

In javascript we use `anything ${variable to inject} anything`
in jsx we use {variable to inject} with no back ticks. Example in return statement.

# Components

## Basic
<React.Fragment> -- https://codewithmosh.com/courses/357787/lectures/5634614
Render Class Dynamically and Refactor VS code - https://codewithmosh.com/courses/357787/lectures/5634625
Handling Events - https://codewithmosh.com/courses/357787/lectures/5634622
    onClick etc
Binding Event Handlers - https://codewithmosh.com/courses/357787/lectures/5634615
    Handle "this" by using "bind()" in the "constructor" OR use Arrow Function
Updating State - https://codewithmosh.com/courses/357787/lectures/5634608
    setState - Only in class based components, not in functional -- confirm and check not sure
Passing Event Arguments - https://codewithmosh.com/courses/357787/lectures/5634618
    onClick={()=> this.functionName(anyArgument)}
    functionName = anyArgument => {}

## Advance

https://codewithmosh.com/courses/357787/lectures/5634716

Composing Components - https://codewithmosh.com/courses/357787/lectures/5634716
Passing data to components - https://codewithmosh.com/courses/357787/lectures/5634713
Passing children - https://codewithmosh.com/courses/357787/lectures/5634710
Debugging React App - https://codewithmosh.com/courses/357787/lectures/5634703
    React Developer Tools in chrome extensions
Props vs State - https://codewithmosh.com/courses/357787/lectures/5634715
    Props value can not be changed when passed to child
Raiding and Handling Events - https://codewithmosh.com/courses/357787/lectures/5634711
    RULE: The component that owns a piece of state, should be the only one to modify it.
    So Child will raise event, and parent will handle event, by passing reference using props
    CHILD  --> onClick={this.props.onDelete}    -- In the JSX
    PARENT --> onDelete = {this.handleDelete}   -- In the JSX
               handleDelete = () => {}          -- A function defined
Updating State - https://codewithmosh.com/courses/357787/lectures/5634718
Single Source of Truth - https://codewithmosh.com/courses/357787/lectures/5634714
Removing Local State and Controlled Component- https://codewithmosh.com/courses/357787/lectures/5634721
Multiple Components in Sync - https://codewithmosh.com/courses/357787/lectures/5634706
Lifting the State up - https://codewithmosh.com/courses/357787/lectures/5634719
Functional Component - https://codewithmosh.com/courses/357787/lectures/5634720

Life Cycle Hooks - https://codewithmosh.com/courses/357787/lectures/5634717
    Used in class based components only, not in functional components
    Mount - https://codewithmosh.com/courses/357787/lectures/5634707
    //For external calls if needed like various ajax calls
        constructor
        render
        componentDidMount
    Update - https://codewithmosh.com/courses/357787/lectures/5634723 
    //Used for optimizing things. If needed to make more external calls like ajax
        render
        componentDidUpdate
    Unmount - https://codewithmosh.com/courses/357787/lectures/5634709
    //Can clean up memory and reset stuff to prevent memory leaks etc
        componentDidUnmount

# Pagination, Sorting and Filtering - Client Side
https://codewithmosh.com/courses/357787/lectures/5706714

lodash underscore - https://codewithmosh.com/courses/357787/lectures/5706706
type checking - https://codewithmosh.com/courses/357787/lectures/5706709

# Routing
https://codewithmosh.com/courses/357787/lectures/5706771

No concept of routing in REACT, to other library is needed. React only handles the views of client side, thats it. Much like d3.
yarn add react-router-dom
yarn add query-string       // https://codewithmosh.com/courses/357787/lectures/5706947

Important - https://codewithmosh.com/courses/357787/lectures/5706944

# Forms - Login, add item and Search Box based filtering
https://codewithmosh.com/courses/357787/lectures/5707058

Refs - https://codewithmosh.com/courses/357787/lectures/5707067 

Validations with JOI - https://codewithmosh.com/courses/357787/lectures/5707068
yarn add joi-browser


# Calling back end services
https://codewithmosh.com/courses/357787/lectures/5867611




# Authentication and Authorization


