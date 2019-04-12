const joi   = require('joi');

//Include custom error module.
const {ValidationError} = require('./error.js');

//Get array of validations-
const make = (values,types)=>{

  //Get an array of results.
  return values.map((val,i)=>{

    //Create a custom schema with only a prop.
    const schema = Joi.object().keys({prop:types[i]});

    //Return the validation.
    return Joi.validate({prop:val}, schema);

  });

}

//Check validations results.
const check = (validList)=>{

  //Find if all the fields fail.
  return ((validList.filter(valid => valid.error===null).length) === validList.length);

}

//Validate the array of values with the array of types.
const validate = (values,types)=>{

  //Get a list of data validations.
  const validations = make(values,types);

  //Check all the fields and return an array of joi validations.
  const valid = check(validations);

  //If Fail some validation.
  if (!valid){

    //Launch error with message and stack.
    throw new ValidationError('TYPE_CHECK',validations);

  }

  return true;

}

module.exports = {
  validate
}