const {typeLength} = require('./typeLength.js');
const {match}  = require('./match.js');
const {execFn} = require('./run.js');

//Get validator functions using typedef.
const {
  parameters,
  output
} = require('./validate.js');

//Create a steps to process the parameter validation.
const validationPipeline = [
  typeLength,
  match,
  parameters,
  execFn,
  output
];

//Middleware process function.
const chainArray = (baseData,steps)=>{

  if ((steps.length>0)&&(baseData)){

    let base = baseData;

    steps.forEach((step,i)=>{
      base = step(base);
    });

    return base.result;

  }    

}

//Receive a stack base object to apply validations.
const parse = (stack) => chainArray(stack,validationPipeline);

module.exports = {
  parse
}