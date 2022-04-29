// Ch3 - Accessing object properties three

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// 이 문제 어려움...
function myFunction(obj, key) {
  return obj[key];
}

console.log(myFunction({ continent: "Asia", country: "Japan" }, "continent"));
console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country"));

/* Test Cases
       
myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent') Expected 'Asia'
myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'
      
*/
