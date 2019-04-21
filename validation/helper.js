//Include joi.
const Joi = require('joi');

//Types categories.
const PRIMITIVES = ['undefined','string','null','boolean','number'];
const COMPLEX    = ['object','promise'];

//Typeof version custom function.
const typeOfB = (value)=>{

  return Object.prototype.toString.call(value).split("]")[0].split(" ")[1].toLowerCase();

}


//Tell if value is a primitive type data.
const isPrimitive = (value)=>{

  return (value && PRIMITIVES.includes(typeOfB(value)));

}

//Tell if is a object type data.
const isComplex = (value)=>{

  return (value && COMPLEX.includes(typeOfB(value)));

}

//Tell if the date is instance of Joi.
const isJoi = (value)=>{

  return (value && value.isJoi)?true:false;

}

//Validate a single chema.
const joiValidate = (schema,value)=>{

  return (Joi.validate(value, schema).error ===null)?true:false;

}

module.exports = {
  joiValidate,
  isJoi,
  isComplex,
  isPrimitive,
  typeOfB
}