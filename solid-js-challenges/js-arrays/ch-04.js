// Ch4 - Get first n elements of an array
/*
배열에는 원본 배열을 직접 변경하는 메서드(mutator method)와 새로운 배열을 생성하여 반환하는 메서드(accessor method)가 있다. 
가급적이면 accessor method를 사용하는 것이 좋음
*/
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction(a) {
  b = a.splice(0, 3);
  return b;
}

console.log(myFunction([1, 2, 3, 4]));
console.log(myFunction([5, 4, 3, 2, 1, 0]));
console.log(myFunction([99, 1, 1]));

/* Test Cases

myFunction([1,2,3,4]) Expected [1,2,3]
myFunction([5,4,3,2,1,0]) Expected [5,4,3]
myFunction([99,1,1]) Expected [99,1,1]

*/
