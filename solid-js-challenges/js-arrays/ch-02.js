// Ch2 - Remove first n elements of an array
// 자바스크립트에서 배열을 객체이기 때문에 delete 연산자를 사용할 수 있는데,
// 이건 객체의 프로퍼티를 삭제한다. -> length 프로퍼티 값은 변하지 않고, 배열은 희소배열이 됨.
// 이를 방지하기 위해서는 Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 element 수) 메소드를 사용한다.

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a) {
  a.splice(0, 3);
  return a;

  // return a.slice(3);
}

console.log(myFunction([1, 2, 3, 4]));
console.log(myFunction([5, 4, 3, 2, 1, 0]));
console.log(myFunction([99, 11, 1]));

/* Test Cases

myFunction([1,2,3,4])Expected[4]
myFunction([5,4,3,2,1,0])Expected[2,1,0]
myFunction([99,1,1])Expected []

*/
