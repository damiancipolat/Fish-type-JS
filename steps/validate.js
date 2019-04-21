//Include typedef.
const {typedef} = require('../validation/typedef.js');

//Analize function call parameters vs type data defined.
const parameters = (data)=>{

  const {types,args} = data;

  //Create a typedef validator and validate it!
  typedef(types)(args);

  return data;
}

//Check function return types.
const output = (data)=>{

  const {result,out} = data;

  //If thereare a out type defined.
  if (out){

    //Validate result with output.
    typedef({p:out})({p:result});

  }

  return data;

}

module.exports = {
  parameters,
  output
}