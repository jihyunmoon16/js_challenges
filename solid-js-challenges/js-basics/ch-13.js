// Split a number into its digits

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

function myFunction(a) {
  // 먼저 입력값을 string으로 바꿔줌.
  // a = a.toString();
  // 그 다음에 split으로 한 글자씩 나줌. -> 그럼 문제는 숫자로 배열에 담기는게 아니라 문자로 담김.???
  // a = a.split("");

  const string = a + ""; // ""를 더해서 문자열로 바꿔줌.
  const strings = string.split(""); // split하면 문자열로 나뉘어짐.
  return strings.map((digit) => Number(digit)); // 맵으로 문자 하나하나를 숫자로 변환.

  // return [...(a + "")].map((el) => +el); // 이렇게도 할 수 있음. +를 부티면 숫자가 됨. 
}

console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));

/*

myFunction(10) Expected [1,0]
myFunction(931) Expected [9,3,1]
myFunction(193278) Expected [1,9,3,2,7,8]

*/
