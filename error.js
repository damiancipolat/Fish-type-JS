//Custom validation error.
class ValidationError{

  constructor(type,stack) {
    this.name  = type;
    this.stack = stack;
  }

}

module.exports = {
  ValidationError
}