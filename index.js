const Joi = require('joi');

//Include custom error module.
const {ValidationError} = require('./error.js');

//Include basic joi types.
const {string,number} = require('./types.js');

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

    //Collect the validations errors in the stack.
    const stack = validations.map(e => {
      return (e.error&&e.error.details)?e.error.details:{ok:true};
    });

    return {
      status:'error',
      stack
    }

  } else {

    return {
      status:'ok'
    }

  }

}

//Create a decorated function with type validation.
const intercept = (types) => (fn)=>(...args)=>{

  //Validate the function call.
  const valid = validate(args,types);

  if (valid && valid.status=='error'){

    //Launch error with message and stack.
    throw new ValidationError('TYPE_CHECK',valid.stack);

  } else {

    //Call the function with the parameters arguments.
    return fn(...args);

  }

}

module.exports = {
  validate,
  intercept,
  types:{
    string,
    number
  }
}