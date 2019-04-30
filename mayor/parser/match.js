  //Convert the arguments list as the parameters format.
const convertParams = (types,args)=>{

  //Get type keys.
  const keys = Object.keys(types);

  //Reassing values in type array.
  let newObj = {};
  
  keys.forEach((key,i)=>{
    newObj[key] = args[i];
  });
    
  return newObj;

}

//Validate types and parameters of function call.
const match = (data)=>{

  const {types,args} = data;

  //Check if there are types to match.
  if (Object.entries(types).length==0)
    throw new Error('Type format struct empty.');

  //Get parameters as the seame format as types, match 1 on 1.
  data.args = convertParams(types,args);

  //Keep the original args in other key to after be used in execFN.
  data.argsPure = args;

  return data;
}

module.exports = {match};