// Ch4 - Accessing object properties three

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// 객체내부에 어떤 속성이 있는지 확인해보는 코드
// 객체에 없는 속성에 접근하면 undefined 자료형이 나오는데 조건문으로 undefined인지 아닌지 확인하면 속성 존재여부 확인 가능
function myFunction(a, b) {
  return a[b] !== undefined;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "z"));

/* Test Cases
         
myFunction({a:1,b:2,c:3},'b') Expected true
myFunction({x:'a',y:'b',z:'c'},'a') Expected false
myFunction({x:'a',y:'b',z:'c'},'z') Expected true
        
*/
