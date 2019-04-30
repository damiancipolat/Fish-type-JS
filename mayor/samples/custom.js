//Include validator.
const {decorate} = require('../index.js');

//Include joi.
const Joi = require('joi');

//Custom user type.
const userType =  Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainAtoms: 2 })
});

//Custom geographic point.
const pointType = Joi.object().keys({
  lat: Joi.number(),
  lng: Joi.number()
});

//Functions to decorate strict types.

//Create user.
const newUser = (user)=>{
  console.log('-->',user.username,user.birthyear,user.email);
  return user.username;
}

//Find by point.
const findGeo = (point)=>{
  return [
    {lat:11.22,lng:1.222},
    {lat:2.22, lng:1.32},
    {lat:1.2,  lng:1.00},
    {lat:10.2, lng:4.000},
  ];
}

//Decorate
const newUserT  = decorate({user:userType})(newUser);
const findGeoT  = decorate({point:pointType})(findGeo);

//Test with correct call.
console.log(newUserT({username: 'damcipolat',birthyear: 1987,email: 'damian.cipolat@gmail.com'}));

//Find by point.
console.log(findGeo({lat:111,lng:33}));

//Test with incorrect call.

//Add new user.
try{
  newUserT({username: 33333,birthyear: 1987,email: 'damian.cipolat@gmail.com'});
} catch(err){
  console.log('error in newUserT',err);
}

//Find by point.
try{
  console.log(findGeoT({lat:'xxx',lng:33}));
} catch(err){
  console.log('error in findGeoT',err);
}