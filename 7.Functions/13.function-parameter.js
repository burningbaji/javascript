function add(A, B, C) {
    return A + B + C;
}
console.log(add(10,20,30))

function multiply(A, B, C) {
    const multy = A * B * C;
        return multy;
}
console.log(multiply(10,20,30))

function sub(x) {
    return function (y) {
      return function (z) {
        return x - y - z;
      }
    }
  }
  
  var singleResult = sub(10)(20)(30);
  console.log(`Executing return functions in one single `, singleResult);
  console.log(`Executing return functions in one single typeof`, typeof singleResult);
  
  var callOne = sub(10);
  console.log(`typeof callOne is `, typeof callOne);
  var callTwo = callOne(20);
  console.log(`typeof callTwo is `, typeof callTwo);
  var result = callTwo(30);
  console.log(`typeof result is `, typeof result);
  
  
  function welcome(name) {
    return `Welcome ${name}`;
  }
  
  function execute(param) {
    const value = param();
    return value;
  }
  
  console.log(welcome('baji'));
  

  execute(welcome);