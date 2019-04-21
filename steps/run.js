//Run the function with the parameters in the stack.
const execFn = (data)=>{

  //Get the argument and the function from the stack.
  const {argsPure,fn} = data;

  //Execute and get the results.
  const result = fn(...argsPure);

  //Append result
  data.result = result;

  return data;
}

module.exports = {
  execFn
}