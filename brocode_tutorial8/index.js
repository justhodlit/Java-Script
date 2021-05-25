/* 
    array = a special variable,
            that can hold more than one value.

            Each "space" is known as an element

            You access elements in an array by reffering
            to the index number ex.[0]

*/

var cars = ["Mustang", "Corvette", "Jaguar"];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]); // out of range of array

cars.push("Tesla"); // to add an element in array, use Push
console.log(cars[3]);

cars.pop(); // removes last elements
console.log(cars[3]);

var numberOfCars = cars.length;
console.log(numberOfCars);

cars.sort(); // sort the array alphabetically, 
             // don't need to reassign array
// cars = cars.sort(); it's same with above
console.log(cars);

cars = cars.reverse(); // reverse sort an array
console.log(cars);

var lastCar = cars[cars.length-1]; // to call the last element in array
console.log(lastCar);