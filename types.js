//Include joi.
const Joi = require('joi');

//Primitive data.
const primitives = {
  string : Joi.string(),
  number : Joi.number(),
  bool   : Joi.boolean(),
  array  : Joi.array(),
  date   : Joi.date(),
  func   : Joi.func(),
  object : Joi.object()
}

//Receive a string and get the current joi object.
const translate = (key) =>{

  //Convert to lowercase.
  key = key.toLowerCase();

  //Get the primitive from the text.
  return (primitives[key])? primitives[key]:undefined;

}

//Adapt a single value to a joi object.
const convertOne = (typeVal)=>{

  return (typeof typeVal ==='string') ? translate(typeVal) : typeVal;

}

//Adapt the date type to joi object.
const convertMultiple = (types)=>{

  if ((types)&&(types.length)){
    return types.map((typeVal) => convertOne(typeVal));  
  } else {
    return types;
  }  

}

module.exports = {
  primitives,
  translate,
  convertMultiple,
  convertOne
};