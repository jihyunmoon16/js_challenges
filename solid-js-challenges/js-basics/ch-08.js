// Ch-08 Extract first half of string

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// 이거 못품...
function myFunction(a) {
  return a.slice(0, a.length / 2);
  // return a.slice(0, a.length / 2 + 1); 여기다 +1 을 왜 했지?? 그냥 2로 나누면 됨.
}

console.log(myFunction("abcdefgh"));
console.log(myFunction("1234"));
console.log(myFunction("gedcba"));

/* Test Cases

myFunction('abcdefgh') Expected 'abcd'
myFunction('1234') Expected '12'
myFunction('gedcba') Expected 'ged'

*/
