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

//String to object translator.
const translator = (key) =>{

  //Convert to lowercase.
  key = key.toLowerCase();

  //Get the primitive from the text.
  return (primitives[key])? primitives[key]:undefined;

}

//Adapt the date type to joi object.
const convertTypes = (types)=>{

  let tmpTypes = [];

  types.forEach((typeVal)=>{

    //if the value is a string convert to joi.
    const tmp = (typeof typeVal ==='string') ? translator(typeVal) : typeVal;

    //Add in the buffer.
    tmpTypes.push(tmp);

  });

  return tmpTypes;

}

//Adapt a single value to a joi object.
const convertType = (typeVal)=>{

  return (typeof typeVal ==='string') ? translator(typeVal) : typeVal;

}

module.exports = {
  primitives,
  translator,
  convertTypes,
  convertType
};