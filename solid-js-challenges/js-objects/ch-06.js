// Ch6 - Swap object keys and values

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// 답 보고 씀...ㅠㅠ
// 우선 Object.entries()는 for...in과 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value]쌍의 배열을 반환함.
// Array.prototype.reduce()는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고 하나의 결과값을 반환함. // arr.reduce(callback[, initialValue])
// Object.fromEntries() 키값 쌍의 목록을 객체로 바꿈.

function myFunction(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [val]: key };
  }, {});
}

function myFunction2(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}

console.log(myFunction({ z: "a", y: "b", x: "c", w: "d" }));
console.log(myFunction({ 2: "a", 4: "b", 6: "c", 8: "d" }));
console.log(myFunction({ a: 1, z: 24 }));

/* Test Cases
myFunction({z:'a',y:'b',x:'c',w:'d'}) Expected {a:'z',b:'y',c:'x',d:'w'}
myFunction({2:'a',4:'b',6:'c',8:'d'}) Expected {a:'2',b:'4',c:'6',d:'8'}
myFunction({a:1,z:24}) Expected {1:'a',24:'z'}
 */
