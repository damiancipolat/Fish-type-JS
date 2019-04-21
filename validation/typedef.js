//Include validation aux functions.
const {
  joiValidate,
  isJoi,
  isComplex,
  isPrimitive,
  typeOfB
} = require('./helper.js');

//Custom validator.
const validate = (value,typeDefined)=>{

  //Get type of the value.
  const typeValue  = typeOfB(value);

  //If the type could be detected.
  const primitive = isPrimitive(value);
  const complex   = isComplex(value);
  const joiFlag   = isJoi(typeDefined);

  /*
    Analize:
    1) If is the typedefined is a joi schema, try to validate them.
    2) Or analize if is a primitive or complex type.
    3) If not 1 or 2, return false
  */

  return (
    (joiFlag&&joiValidate(typeDefined,value))||
    ((primitive||complex)&&(typeValue===typeDefined))
  );

}

//Validate typedef.
const typedef = (struct)=>{

  return (object)=>{

    //Get all element entries.
    Object.entries(object).forEach(([key, value])=>{

      //Get the type date, doing a match struch + object.
      const typeFormat = struct[key];

      //Validate value format using type defined.
      const valid = validate(value,typeFormat);

      //If the type validation fail.
      if (!valid)
        throw TypeError(key);
      
    });

    return true;

  }

}

module.exports = {typedef};