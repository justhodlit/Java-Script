// Type Conversion of numbers, strings, booleans
// (Explicit vs Implicit)

// change the datatype of a value to another

var age = window.prompt("Enter Your Age");

console.log("Happy Birthday!");

age += 1;

console.log(age);

// result of age is 211 if I enter 21 at first.
// because first input is string.

var age = window.prompt("Enter Your Age");

console.log("Happy Birthday!");

age = Number(age); // Convert the Strings to Numbers

age += 1;

console.log(typeof age);
console.log(age);

/////

var myVar;

//myVar = Number("3.14");
//myVar = String(3.14);
myVar = Boolean(); /* if we put some NaN, undefined, or anything without "",
then it will be false. Else, if it's with "" then it will be true */

console.log(typeof myVar);
console.log(myVar);