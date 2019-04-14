<a href="http://hapijs.com"><img src="https://github.com/damiancipolat/JS-Dynamic-type-validation/blob/master/doc/fish_2.png?raw=true" width="180px" align="right" /></a>

# Fish-type JS

Data type validation in function calls on **Runtime** to be used in javascript projects.

Make with love from Argentina.

## Objective:
Every JS programmer knows how annoying it is to work with static validators of data types. That's why I created this library, to help us and make sure that our function is always executed only with the types of data that we define for it.

## Type data validation:
This library uses joi https://github.com/hapijs/joi to handle the type validations, you can use custom primitives data as "string", "bool", "number" or more complex structure to validate if the parameters used to call a function match with the paramters that we define to allow it.

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
**Define input and output:**

You can  specify the types of the parameters that the function receive and the return data of the function.
```javascript
const newFunction = decorate([IN],OUT)(Function);
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

If you want more, go and download the project and go to /samples folder and chek the examples.

## TODO:
This library is a work in progress project, I'm sure that will be very usefull for any JS developer, but there are some things pending to add in the library, but in the next version will apeear.

- Add type validation to simple variables.
- Improve how to specify the types of the call of a function to something else of the Typescript style.
- To be able to specify in case there is no matcheo of types to return null or to throw an exception.
