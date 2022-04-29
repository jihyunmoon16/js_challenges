// Ch7 - Count number of elements in JavaScript array

// Write a function that takes an array (a) as argument
// Return the number of elements in a

// 고차함수(High-order Function, HOF)는 함수르 ㄹ인수로 전달받거나 함수를 반환하는 함수를 얘기함.
// 고차함수는 mutable 데이터를 피하고 immutability를 지향하는 함수형 프로그래밍에 기반을 둠
// -> 리액트도 비슷함. 그래서 useState를 사용해서 상태관리를 해줌?

// 함수형 프로그래밍은 조건문과 반복문을 제거하여 복잡서 해결하고 변수의 사용을 억제하여 상태변경을 피하려고 하는 프로그래밍 패러다임.
// forEach 메소드는 for문을 대체할 수 있는 고차함수임. (자신의 내부에서 반복문 실행)
// forEach 메소드는 undefined를 반환.

function myFunction(a) {
  count = 0;
  a.forEach((item) => count++);
  return count;
}

console.log(myFunction([1, 2, 2, 4]));
console.log(myFunction([9, 9, 9]));
console.log(myFunction([4, 3, 2, 1, 0]));

/* Test Cases
    
myFunction([1,2,2,4]) Expected 4
myFunction([9,9,9]) Expected 3
myFunction([4,3,2,1,0]) Expected 5

*/
