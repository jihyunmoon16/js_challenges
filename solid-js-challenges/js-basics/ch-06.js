// Ch-6 - Get last n characters of string

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
  return str.slice(str.length - 3, str.length);
  // return str.slice(-3) -> 그럼 뒤에서 부터 짤라준다. 
}

console.log(myFunction("abcdefg"));
console.log(myFunction("1234"));
console.log(myFunction("fgedcba"));

/*

myFunction('abcdefg') Expected 'efg'
myFunction('1234') Expected '234'
myFunction('fgedcba') Expected 'cba'

*/
