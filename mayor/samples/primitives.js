//Include validator.
const {decorate,types} = require('../index.js');
const {number,any} = types;

//Sum function.
const sum = (a,b)=>{
  return a+b;
}

//Dif functions.
const dif = (a,b)=>{
  return a-b;
}

//Multiply.
const mult = (a,b)=>{
  return a*b;
}

//Using data types.
const sumT  = decorate(number,{a:number,b:number})(sum);
const difT  = decorate(number,{a:number,b:number})(dif);
const multT = decorate(any,{a:number,b:number})(mult);

console.log('sumT', sumT(10,10));
console.log('difT', difT(10,100));
console.log('multT',multT(10,10));

/*
//Calculate net salary.
function netSalary(value){
  return (value*17)/100;
}

//Calculate IVA of a value.
function calcIva(value){
  return value*0.21;  
}

//Make nickname.
const nickname = (name,surname)=>{
  return name.substring(0,1)+surname;
}

//Create profile.
const profile = (name,surname,age,single)=>{

  return {
    profile:{
      name,
      surname,
      age:`${age} years`,
      single
    }
  };

}

//Create decorated functions with dinamyc type validation.

//Using data types.
const sumT  = decorate({a:'number',b:'number'},'number')(sum);
const difT  = decorate({a:'number',b:'number'},'number')(dif);
const multT = decorate({a:'number',b:'number'},'number')(mult);

//Using single string types.
const netSalaryT  = decorate({value:'number'},'number')(netSalary);
const calcIvaT    = decorate({value:'number'},'number')(calcIva);
const nicknameT   = decorate({name:'string',surname:'string'},'string')(nickname);
const profileT    = decorate({name:'string',surname:'string',age:'number',single:'bool'})(profile);

//Test functions call.
console.log('sumT',sumT(10,10));
console.log('difT',difT(10,100));
console.log('multT',multT(10,2));
console.log('netSalaryT',netSalaryT(50000));
console.log('calcIvaT',calcIvaT(2000));
console.log('nicknameT',nicknameT('Damian','Cipolat'));
console.log('profileT',profileT('Damian','Cipolat',31,true));

//Test functions with bad parameters call.
try{
  multT(10,'Ff');
} catch(err){
  console.log('Hubo un error mult function',err);
}

try{
  profileT(9,9,31,true);
} catch(err){
  console.log('Hubo un error profile function',err);
}
*/