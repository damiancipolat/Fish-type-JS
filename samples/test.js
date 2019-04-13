//Include validator.
const {intercept,types} = require('../index.js');

//Include data types.
const {
  number, 
  string, 
  bool,
  date,
  array,
  func,
  object
}  = types;

//Sample functions.
const sum = (a,b)=>{
  return a+b;
}

const dec = (a,b)=>{
  return a-b;
}

const print = (name,surname,age,email)=>{
  console.log('Hello!',name,surname,age,email);
}

//Create a decorated function with type validation.
const sumT = intercept([number,number])(sum);

console.log(sumT(1,2));