// Ch9 - Sort an array of numbers in descending order

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// 배열 고차 함수 sort() -> 원본 배열 직접 변경 -> 정렬된 배열을 반환함
// 기본적으로 오름차순임.
// 문제에서는 내림차순으로 정렬하라고함.
// sort 메서드는 유니코드 코드 포인트의 순서를 따라서 배열의 요소가 숫자타입이라 해도 배열의 요소를 일시적으로 문자열로
// 반환 후 유니코드 코드 포인트의 순서를 기준으로 정렬함.
// 숫자요소를 정렬할 때는 sort 메소드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야함.

function myFunction(arr) {
  // 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다. 
  return arr.sort((a, b) => b - a);
}

console.log(myFunction([1, 3, 2]));
console.log(myFunction([4, 2, 3, 1]));

/* Test Cases
        
myFunction([1,3,2]) Expected [3,2,1]
myFunction([4,2,3,1]) Expected [4,3,2,1]
    
    */
