//Include validator.
const {decorate,types} = require('../index.js');

//Include primitives types.
const {
  number, 
  string,
  bool
} = types;

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

const sumT  = decorate([number,number],number)(sum);
const difT  = decorate([number,number],number)(dif);
const multT = decorate([number,number],number)(mult);

//Using single string types.

const netSalaryT  = decorate(['number'],'number')(netSalary);
const calcIvaT    = decorate(['number'],'number')(calcIva);
const nicknameT   = decorate(['string','string'],'string')(nickname);
const profileT    = decorate(['string','string','number','bool'])(profile); 

//Test functions call.
sumT(10,10);
difT(10,100);
multT(10,2);
netSalaryT(50000);
calcIvaT(2000);
nicknameT('Damian','Cipolat');
profileT('Damian','Cipolat',31,true);

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
