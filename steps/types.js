//Validate types and parameters of function call.
const typeLength = (data)=>{

  const {types,args} = data;

  //Check if the length of both structures are the same, if not exception.
  if (Object.entries(types).length!=args.length)
    throw new Error('Function types and parameters list not match');

  return data;
}

module.exports = {typeLength};