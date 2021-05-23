/* 
    function in javaScript 

    A function is a block of code designed to perform
    a particular task/procedure. (subroutine)

    We invoke "call" whenever we want it to do something
    We need to define what we want task to do.

*/

function sayHello(){
    console.log("Hello");
    console.log("Have a nice day!");
    console.log("Goodbye!");
};

sayHello();

///////

function sayHello2(myName){
    console.log("Hello", myName);
};

var myName = "Danny";

sayHello2(myName);
sayHello2("Bro");

///////

function sayHello3(myName, myAge){
    console.log("Hello", myName);
    console.log("You are", myAge, "years old");
    return 
};

sayHello3(myName, 21);

//////

function toCelsius(f){
    var result = (f-32) * (5/9);
    return result;
};

function toCelsius2(f){
    return (f-32) * (5/9);
};

var myTemp = toCelsius(100);
var myTemp2 = toCelsius2(100);

console.log("My temp in C is", myTemp, "degrees");
console.log("My temp in C is", myTemp2, "degrees");

function toFarenheit(c){  // c = parameter
    return (c * 9/5) + 32;
};

var myTemp3 = toFarenheit(37.7); // 37.7 = argument

console.log("My temp in C is", myTemp3, "degrees");