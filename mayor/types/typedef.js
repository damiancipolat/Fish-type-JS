const {any} = require('./primitives.js')

//Custom typeof function.
function type_of(value){
  return Object.prototype.toString.call(value).split("]")[0].split(" ")[1].toLowerCase();
}

//Crate typedef validaton.
function typedef(struct) {
  return function validate(object) {

    if (type_of(object) !== "object") {
        throw TypeError("The expected value was an object.");
    }

    Object.entries(object).forEach(function ([key, value]) {
      const validator = struct[key];

      if (typeof validator !== "function") {
          throw Error("Type validators should be functions.");
      }

      validator(value);
    });
    
    return true;
  }
}

module.exports = {
  type_of,
  typedef
}