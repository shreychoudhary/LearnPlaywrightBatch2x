 let raj_age=18;
let is_raj_adult = raj_age >= 18 ? "Raj is an adult" : "Raj is not an adult";
console.log(is_raj_adult);  

//Nested Ternary 
let age = 12;
let category = age < 13 ? "Child" : age < 20 ? "Teenager" : "Adult";
console.log(category);

let a = 85;
let b=  95;
let c= 95;
let result = a > b && a > c ? "A is greater" 
           : b > a && b > c ? "B is greater"
           : c > a && c > b ? "C is greater" : "Any two or more numbers are equal";
           const max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
console.log(result);
console.log(max);
