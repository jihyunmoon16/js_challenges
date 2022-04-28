// Ch-4 - Get nth character of string

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

// charAt() 함수를 쓰면 몇번째 인덱스에 어떤 글짜가 있는지 확인 할 수 있음.
function myFunction(a, n) {
  return a.charAt(n);
}

// 0번째 부터 시작하는 거 아닌가?
console.log(myFunction("abcd", 1));
console.log(myFunction("zyxbwpl", 5));
console.log(myFunction("gfedcba", 3));
/* Test Cases

myFunction('abcd',1) Expected 'a'
myFunction('zyxbwpl',5) Expected 'w'
myFunction('gfedcba',3) Expected 'e'

*/
