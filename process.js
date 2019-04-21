//Middleware process function.
const middleware = (baseData,steps)=>{

  if ((steps.length>0)&&(baseData)){

    try{

      let base = baseData;

      steps.forEach((step,i)=>{        
        base = step(base);
      });

      return base.result;

    }catch(err){
      console.log('-->',err);
    }

  }    

}

module.exports = {
  processate : middleware
}