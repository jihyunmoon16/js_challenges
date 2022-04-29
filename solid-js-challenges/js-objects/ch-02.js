// Ch2 - Accessing object properties two

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

// 식별자로 사용할 수 없는 키에 접근할 때는 대괄호 사용

function myFunction(obj) {
  return obj["prop-2"];
}

console.log(myFunction({ one: 1, "prop-2": 2 }));
console.log(myFunction({ "prop-2": "two", prop: "test" }));

/* Test Cases
     
myFunction({  one: 1,  'prop-2': 2}) Expected 2
myFunction({  'prop-2': 'two',  prop: 'test'}) Expected 'two'
    
*/
