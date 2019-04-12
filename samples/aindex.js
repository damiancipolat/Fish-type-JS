const {validate} = require('./validator.js');
const Joi = require('joi');

const lista = [3,'2','2222'];
const valid = [Joi.string(),Joi.number(),Joi.string()];

try{
const tmp = validate(lista,valid);
console.log(tmp);  
} catch(err){
  console.log('--->',err);
}


/*
const prueba = (p1,p2,p3)=>{

  console.log('xxx',p1,p2,p3);

}

function sumar(a,b){

  return a+b;

}

const bar = (...args)=>{

  args.forEach(e=>{
    console.log('--->',e);
  });

  prueba(...args);

}

const intercept = (...args) => (fn)=>{

  args.forEach(e=>{
    console.log('--->',e);
  });

  return fn(...args);

}

//bar(1,2,3);
const resu = intercept(1,2)(sumar);

console.log(resu);
*/


/*
const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })
});

const result = Joi.validate({ username: 'ab', birthyear: 1994 }, schema);
*/


/*
const prueba = (p1,p2,p3)=>{

  console.log('xxx',p1,p2,p3);

}

function sumar(a,b){

  return a+b;

}

const bar = (...args)=>{

  args.forEach(e=>{
    console.log('--->',e);
  });

  prueba(...args);

}

const intercept = (...args) => (fn)=>{

  args.forEach(e=>{
    console.log('--->',e);
  });

  return fn(...args);

}

//bar(1,2,3);
const resu = intercept(1,2)(sumar);

console.log(resu);
*/