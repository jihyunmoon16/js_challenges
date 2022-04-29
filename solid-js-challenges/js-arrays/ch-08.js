// Ch8 - Count number of negative values in array

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {
  count = 0;
  // 삼항연산자를 사용해서 0보다 작은 값만 카운트함.
  a.forEach((item) => (item < 0 ? count++ : null));
  return count;
}

console.log(myFunction([1, -2, 2, -4]));
console.log(myFunction([0, 9, 1]));
console.log(myFunction([4, -3, 2, 1, 0]));

/* Test Cases
      
myFunction([1,-2,2,-4]) Expected 2
myFunction([0,9,1]) Expected 0
myFunction([4,-3,2,1,0]) Expected 1
  
*/
