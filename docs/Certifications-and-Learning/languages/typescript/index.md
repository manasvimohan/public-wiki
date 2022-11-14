# Contents

- [Intro](#Intro)
- [Fundamentals](#Fundamentals)
    - [Built-in Types](#Fundamentals#Built-in Types)
- [Advance Types](#Advance Types)
- [Generics](#Generics)
- [Modules](#Modules)
- [Integration with Javascript](#Integration with Javascript)
    - [Importing js file in ts file](#Integration with Javascript#Importing js file in ts file)
    - [Type Checking](#Integration with Javascript#Type Checking)
    - [JSDoc - Describing Types](#Integration with Javascript#JSDoc - Describing Types)
    - [Declaration Files](#Integration with Javascript#Declaration Files)
    - [Third party js libs](#Integration with Javascript#Third party js libs)
- [TypeScript with REACT](#TypeScript with REACT)
    - [Calling Backend](#TypeScript with REACT#Calling Backend)

# Intro

Made by Microsoft.
Static Typing. Meaning, one has to define vars at the point of defining it.

# Fundamentals

## Built-in Types
number, string, boolean, null, undefined, object
any, unknown, never, enum, tuple

```typescript
let sales: number = 123_456_789;
let course: string = 'Mana';
let level: any;                                 // Can be changed later
let number: number[] = [];                      // number array
let user: [number, string] = [1,'Mohan'];       // tuple. user.push(1) is an issue in typescript.

// PascalCase
enum Size {Small=1, Medium, Large='m'}        // Enum
const enum Size {Small=1, Medium, Large}        // Optemized Enum

// Function https://codewithmosh.com/courses/1779784/lectures/40255446
function someThing(income: number, year = 2022): string {}   //input is num and output is string
// noUnusedLocals, noUnusedParameters, noImplicitReturns

// Objects https://codewithmosh.com/courses/1779784/lectures/40255447
// Basic Way
let employee: {
readonly id: number,            // This is read only, can not be modified
name?: string,                  // Made this Optional with ?
retire: (date: Date) => void    // Defined a method
} = {id: 1, name: 'Mohan', retire: (date: Date) => {}};

employee.name = 'Manasvi'
employee.id = 22    // Not allowed, since read only
```

# Advance Types
The above way of defining object is so messy.
So we use type aliases.

```typescript
type Employee = {
readonly id: number,
name: string,
retire: (date: Date) => void
}

let employee: Employee = {.......}
```



# Generics



# Modules
```
//  ./shapes/index.ts

// Example of re-exporting

// We have two files A.ts and B.ts in shapes folder.
import { A } from "./A";
import { B } from "./B";

export { A, B };

// The above and below are same
export { A } from "./A";
export { B } from "./B";

```

# Integration with Javascript

## Importing js file in ts file
Javascript code can not be imported by default in typescript.
In tsconfig.js --> "allowJs": true

## Type Checking
In tsconfig.js --> "checkJs": true

We can optionally turn off compiler errors on a file-by-file basis by applying 
// @ts-nocheck once on top of JavaScript files. 

## JSDoc - Describing Types
Above all classes, add these.

```typescript
/** 
* Describe what function does.
* @param {number} something - Something is a variables
* @returns {number}
*/
```

## Declaration Files
Similar to JSDoc, but you might not want to add comments in the main file.

So we create a file with "fileName.d.ts" format.

Image we have a module called tax.js. So declaration file will be tax.d.ts

Note the "declare" keyword below.

```typescript
// tax.d.ts
export declare function calculateTax(income: number): number;
```

## Third party js libs
If normal js modules are installed and used, we will not see typescript compilation details and errors.
To solve this, there is a github repo called "Definitely Typed".

Instead of --> npm i lodash
We use     --> npm i --save-dev @types/lodash

Newer JavaScript libraries come with type definition files. So there’s no need to install type definition files separately. 

# TypeScript with REACT

## Calling Backend
https://codewithmosh.com/courses/1779784/lectures/40256506
