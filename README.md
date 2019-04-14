# JS-Dynamic-type-validation

Data type validation in function calls on **Runtime** to be used in ES6.

## Objective:
Every JS programmer knows how annoying it is to work with static validators of data types. That's why I created this library, to help us and make sure that our function is always executed only with the types of data that we define for it.

## Type data validation:
This library uses joi to handle the type validations, you can use custom primitives data as "string", "bool", "number" to validate if the parameters used to call a function match with the paramters that we define to allow it.

## Usage:

#### Install:

Run this command to install the library from npm.
```sh
npm install dyn-check
```
#### Library:
The library export two things, a decorate function that have to be use for decorate a single function and add a automatic call parameters validation, and a list of primitive data types.

**Decorate function - format**
```javascript
const {decorate,types} = require('../index.js');

//I will get the function output.
const sumT = decorate([IN],OUT)(sum);
```

#### Examples:
Try this basic example of how to use the library.

```javascript
//Include lib and types.
const {decorate,types} = require('../index.js');

const {
  number
} = types;

//Basic function.
const sum = (a,b)=>{
  return a+b;
}

//Decorate the function.
const sumT  = decorate([number,number],number)(sum);

sumT(10,10);
```
