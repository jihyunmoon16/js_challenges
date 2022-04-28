// Ch1 - Get nth element of array
// 자바스크립트의 배열은 해시테이블로 구현된 객체임. 그래서 인덱스로 요소에 접근하는 경우
// 일반적인 배열(dense array)보다 성능적인 면에서 느림. 하지만 특정 요소 검색/삽입/삭제는 빠르다. 

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n) {
  return a[n - 1];
}

console.log(myFunction([1, 2, 3, 4, 5], 3));
console.log(myFunction([10, 9, 8, 7, 6], 5));
console.log(myFunction([7, 2, 1, 6, 3], 1));

/* Test Cases
 
myFunction([1,2,3,4,5],3) Expected 3
myFunction([10,9,8,7,6],5) Expected 6
myFunction([7,2,1,6,3],1) Expected 7

*/
