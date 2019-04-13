//Include joi.
const Joi = require('joi');

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
const complete = (values,types)=>{

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

//Validate a single output.
const single = (type,value)=>{

  //Create a custom schema with only a prop.
  const schema = Joi.object().keys({prop:type});

  //Return the validation.
  return (Joi.validate({prop:value}, schema).error ===null);

}

module.exports ={
  single,
  complete
}