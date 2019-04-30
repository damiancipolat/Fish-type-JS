const {type_of} = require('./typedef.js');

/*
  Complex types validator.
*/

function object(value){
  if (type_of(value) === "object") {
    throw TypeError("The expected value was an object.");
  }

  return true;
}

function date(value){
  if (type_of(value) !== "date") {
    throw TypeError("The expected value was a Date object.");
  }

  return true;
}

function promise(value){
  if (type_of(value) !== "promise") {
    throw TypeError("The expected value was a Promise object.");
  }

  return true;
}

function array(value){
  if (type_of(value) !== "array") {
    throw TypeError("The expected value was an array.")
  }
}

module.exports = {
  object,
  date,
  promise,
  array
};
