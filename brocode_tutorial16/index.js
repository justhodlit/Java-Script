/*
    Math = An object that provides basic
           mathmatics functionality and constants.
*/

var myNum;

myNum = Math.round(3.5);
console.log(myNum);  // 4

myNum = Math.floor(3.9);
console.log(myNum);  // 3

myNum = Math.ceil(3.1);
console.log(myNum);  // 4

myNum = Math.pow(3, 2);
console.log(myNum); // 9

myNum = Math.sqrt(64);
console.log(myNum); // 8

myNum = Math.abs(-1);
console.log(myNum); // 1

myNum = Math.min(1, 5, 2, 4, 3);
console.log(myNum); // 1

myNum = Math.max(1, 5, 2, 4, 3);
console.log(myNum); // 5

myNum = Math.PI
console.log(myNum);  // 3.14...

myNum = Math.E; // Euler Numbers
console.log(myNum);  // 2.718...


/// solve for hypotenuse of a right triangle

var a = window.prompt("Enter side A");
var b = window.prompt("Enter side B");
var c;

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

console.log("Side c =", c);