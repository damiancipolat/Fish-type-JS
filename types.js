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

module.exports = {
  primitives,
  translator
};