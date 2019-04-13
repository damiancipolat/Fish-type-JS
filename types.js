const Joi = require('joi');

module.exports = {
  string : Joi.string(),
  number : Joi.number(),
  bool   : Joi.boolean(),
  array  : Joi.array(),
  date   : Joi.date(),
  func   : Joi.func(),
  object : Joi.object()
}