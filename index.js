const Joi = require('joi');

//Include custom error module.
const {ValidationError} = require('./error.js');

//Include basic joi types.
const {
  primitives,
  convertMultiple,
  convertOne
} = require('./types.js');

//Include custom validator.
const {
  complete,
  single
} = require('./validate.js');

//Create a decorated function with type validation.
const decorate = (types,out) => (fn)=>(...args)=>{

  //Convert the parameters list.
  types = convertMultiple(types);

  //Convert the ouput.
  out = convertOne(out);

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

module.exports = {
  decorate,
  types : primitives
}