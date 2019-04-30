//Include primitives types.
const {
  any,
  string,
  boolean,
  number,
  int
} = require('./primitives.js');

//Include complex types.
const {
  object,
  date,
  promise,
  array
} = require('./complex.js');

//Include typedef validator.
const {typedef,type_of} = require('./typedef.js');

//Export all together.
module.exports = {
  types:{
    any,
    string,
    boolean,
    number,
    int,
    object,
    date,
    promise,
    array,
  },
  typedef,
  type_of
};

