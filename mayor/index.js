const {parse} = require('./parser');
const {types} = require('./types');

//Return a new function with type validation.
const decorate = (out,types) => (fn) => (...args) => {

  //Create a base structure.
  const stack = {
    types,
    out,
    fn,
    args,
    result : null
  };

  //Process and parse the result.
  return parse(stack);

}

module.exports = {
  decorate,
  types
};