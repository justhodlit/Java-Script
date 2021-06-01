/*
    for in loop = Loops through the elements in an array
                  or the properties of an Object
                  less syntax to write, but less flexible
*/

let letters = ["H","E","L","P"];

// traditional For loop

for(let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}

// for in loop

for(let i in letters){
    console.log(letters[i]);
}

let car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}

for(let property in car){
    console.log(car[property]);
}