// Clear up the chaos behind these strings

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  // replace를 사용해서 문자의 %를 공백으로 바꿔줌.
  a = a.replace("%", "");
  b = b.replace("%", "");

  // b를 역순으로 정렬해야되서 우선 split으로 각 문자를 나눈뒤, reverse로 뒤집은 다음, join으로 합쳐줌.
  b = b.split("").reverse().join("");

  // 그 다음 a와 b를 한 단어로 합쳐준다.
  c = a + b;

  // 출력결과를 보면 대문자로 시작하기 때문에 charAt(0)을 사용해서 앞 글자를 대문자로 바꿔주고,
  // slice(1)를 사용해서 인덱스가 1인 문자부터 마지막 문자까지 잘라낸 것을 더해주었다.
  c = c.charAt(0).toUpperCase() + c.slice(1);

  return c;
}

// function myFunction(a, b) {
//   const cleanS1 = a.replace("%", "");
//   const cleanS2 = b.replace("%", "");

//   return cleanS1.charAt(0).toUppercase() + cleanS1.slice(1) + cleanS2.split("").reverse().join("");
// }

console.log(myFunction("java", "tpi%rcs"));
console.log(myFunction("c%ountry", "edis"));
console.log(myFunction("down", "nw%ot"));

/*

myFunction('java', 'tpi%rcs') Expected 'Javascript'
myFunction('c%ountry', 'edis') Expected 'Countryside'
myFunction('down', 'nw%ot') Expected 'Downtown'

*/
