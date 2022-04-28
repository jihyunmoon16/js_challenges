// Ch-3 Get type of value

// Write a function that takes a value as argument
// Return the type of the value
function myFunction(a) {
  return typeof a;
}

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null)); // 널 값도 object임
console.log(myFunction("string"));
console.log(myFunction(["array"]));

/* Test Cases

myFunction(1) Expected 'number'
myFunction(false) Expected 'boolean'
myFunction({}) Expected 'object'
myFunction(null) Expected 'object'
myFunction('string') Expected 'string'
myFunction(['array']) Expected 'object'

*/
