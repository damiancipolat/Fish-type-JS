const Joi = require('joi');

//Include custom error module.
const {ValidationError} = require('./error.js');

//Include basic joi types.
const {
  primitives,
  translator
} = require('./types.js');

//Include custom validator.
const {
  complete,
  single
} = require('./validate.js');

//Create a decorated function with type validation.
const intercept = (types,out) => (fn)=>(...args)=>{

  //Validate the function call.
  const valid = complete(args,types);

  if (valid && valid.status=='error'){

    //Launch error with message and stack.
    throw new ValidationError('TYPE_CHECK_PARAMS',valid.stack);

  } else {

    //Call the function send the args.
    const result = fn(...args);
    
    //If the output type is defined.
    if ((out)&&(!single(out,result)))
      throw new ValidationError('TYPE_CHECK_OUTPUT',out);
    
    return result;

  }

}

//console.log('+++',translator('number'));

module.exports = {
  intercept,
  typeData : primitives
}