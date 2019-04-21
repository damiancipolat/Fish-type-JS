<img src="https://github.com/damiancipolat/JS-Dynamic-type-validation/blob/master/doc/fish_2.png?raw=true" width="180px" align="right" />

# Fish type JS

Data type validation in function calls on **Runtime** to be used in javascript projects.

[![dependencies Status](https://david-dm.org/damiancipolat/Fish-type-JS.svg)](https://david-dm.org/damiancipolat/Fish-type-JS)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/damiancipolat/Fish-type-JS/blob/master/LICENSE)
[![version](https://img.shields.io/badge/version-%3E%3D%201.0.0-green.svg)](https://github.com/damiancipolat/Fish-type-JShttps://github.com/damiancipolat/Fish-type-JS)
[![build](https://travis-ci.com/damiancipolat/Fish-type-JS.svg?branch=master)](https://travis-ci.com/damiancipolat/Fish-type-JS)

<a href="https://www.npmjs.com/package/fish-type-js"><img src="https://nodei.co/npm/fish-type-js.png?downloads=true"></a>

**We have the new version 1.1.0 ready!**

In this version:
- Improve input function type semantic.
- Add typedef validation module.

## Objective:
Every JS programmer knows how annoying it is to work with static validators of data types. That's why I created this library, to help us and make sure that our function is always executed only with the types of data that we define for it.

## Type data validation:
This library uses joi https://github.com/hapijs/joi to handle the type validations, you can use custom primitives data as "string", "bool", "number" or more complex structure to validate if the parameters used to call a function match with the paramters that we define to allow it.

## Usage:

#### Install:

Run this command to install the library from npm.
```sh
npm install fish-type-js
```
#### Library:
The library export two things, a decorate function that have to be use for decorate a single function and add a automatic call parameters validation, and a list of primitive data types.

**Decorate function - format**
```javascript
const {decorate} = require('fish-type-js');

//I will get the function output.
const sumT = decorate({input},output)(sum);
```
**Define input and output:**

You can  specify the types of the parameters that the function receive and the return data of the function.

```javascript
const newFunction = decorate({input},output)(Function);

```

**IN**:  paramters structure / **OUT**: type function return


**Type parameters**:
You can use this type parameters in each parameter key.

* undefined
* string
* null
* boolean
* number
* object
* promise

Or create more complex object schema and mix the function call with a joi schema validation, is important
to remember include JOI module to use his data types schema.

```javascript
const Joi = require('joi');

//Include primitives types.
const pointType =  Joi.object().keys({
  lat: Joi.number(),
  lng: Joi.number()
});

const findGeoT  = decorate({point:pointType})(findGeo);

findGeoT({lat:1.111,lng:3.01});

```
#### Examples:

Try this basic example of how to use the library.

```javascript
//Include lib and types.
const {decorate} = require('fish-type-js');

//Basic function.
const sum = (a,b)=>{
  return a+b;
}

//Decorate the function.
const sumT  = decorate({a:'number',b:'number'},'number')(sum);

sumT(10,10);

```

If you want more examples, go and download the project and go to /samples folder and chek the examples.

## Note:
This library is a work in progress project, I'm sure that will be very usefull for any JS developer, but take care that could be changes in the next versions. **We are working in create our custom structure validation engine to avoid use JOI*.
