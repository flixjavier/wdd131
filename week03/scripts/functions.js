function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(2); // Logs 6 (which is 1 + 2 + 3)

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "

//rest arguments
function multiply(multiplier, ...args) {
  return args.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


function fullName(firstName, lastName){
  return `${firstName} ${las}`;
}

let fullName = function (firstName, lastName){
  return `${firstName} ${lastName}`
}

let fullNAME = (x,y) => {
  return `${x} ${y}`
}

document.querySelector('#fullName').innerHTML = fullName(firstName,lastName)