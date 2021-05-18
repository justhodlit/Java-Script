var age = 25;
var firstName = "Danny" // str needs to be assigned with quotes
var lastName = "Kim";
var online = true;  // boolean type : true or false
var whatever; // gonna assign later

//whatever = "Code" // now assigned whatever
var fullName = firstName + " " + lastName;

console.log("Your age is "+age);
console.log("Your age is",age);
console.log("Hello", firstName);
console.log("Hello", fullName);
console.log("Are you online?:", online);
console.log(whatever)

age = age + 1;
console.log("Your age is",age);


let mySweetVariable; // let is used for temporarily assigning a value
const pi = 3.141592; // const is used for the value that won't be changed
pi = 4;
console.log(pi) // it will occur an error due to 'const'