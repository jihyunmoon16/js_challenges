// Ch6 - Remove a specific array element

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 구분자(separator)로
// 연결한 문자열 반환
// splice나 filter 사용해서 삭제 가능. 근데 문제에서 중복된 요소도 다 지우라고 하니까 필터씀.

function myFunction(a, b) {
  // 필터 메서드는 콜백 함수의 반환값이 true인 요소만 추출한 해로운 배열을 반환. 
  // 그래서 인자 b로 들어온걸 다 지워야 하니까 item !== b 이렇게 해주면 b가 아닌 것(true)만 반환해줌.
  a = a.filter((item) => item !== b);
  return a;
}

console.log(myFunction([1, 2, 3], 2));
console.log(myFunction([1, 2, "2"], "2"));
console.log(myFunction([false, "2", 1], false));
console.log(myFunction([1, 2, "2", 1], 1));

/* Test Cases
    
myFunction([1,2,3], 2) Expected [1, 3]
myFunction([1,2,'2'], '2') Expected [1, 2]
myFunction([false,'2',1], false) Expected ['2', 1]
myFunction([1,2,'2',1], 1) Expected [2, '2']

*/
