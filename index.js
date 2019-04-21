//Get process steps.
const {
  typeLength,
  match,
  execFn,
  parameters,
  output
} = require('./steps');

//Middleware process function.
const {processate} = require('./process.js');

/*
  Decorate internal steps

  1) validate types length with parameters length
  2) match structure types with parameters structure and get the param+value struct.
  3) validate both structure using new typedefs.
  4) Call function 
  5) If there are a function type return defined, validate and if the type is ok return it.

*/

const decorate = (types,out) => (fn)=>(...args)=>{

  //Functions data to be processed in the steps.
  let base = {
    types,
    out,
    fn,
    args,
    result : null
  };

  //Processate the steps and return the stack.
  const fnStack = processate(base,[
    typeLength,
    match,
    parameters,
    execFn,
    output
  ]);

  return fnStack;

}

module.exports = {
  decorate
}