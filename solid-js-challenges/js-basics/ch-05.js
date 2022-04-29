// Ch-5 - Remove first n characters of string

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// subtr() 함수를 사용하면 숫자 앞을 다 지우고 나머지 반환함.

function myFunction(a) {
  return a.substr(3);
  // return a.slice(3);
}

console.log(myFunction("abcdefg"));
console.log(myFunction("1234"));
console.log(myFunction("fgedcba"));

/*

myFunction('abcdefg') Expected 'defg'
myFunction('1234') Expected '4'
myFunction('fgedcba') Expected 'dcba'

*/
