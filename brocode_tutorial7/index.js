/*
    object = a container for properties/methods

    property = values/variables that describe what an object has
    methods = functions that describe what an object can do

*/

var human1 = {  // human is an object

    name: "Rick",  // property
    age: 65,       // property

    eat : function(){
        console.log("Rick is eating food")
    },

    drink : function(){
        console.log("Rick is drinking alcohol *burp*")
    },

    sleep : function(){
        console.log("Rick has passed out");
    }
};

human1.name // dot notation
human1['name'] // bracket notation

console.log(human1);
console.log(human1.name);
console.log(human1['name'])
console.log(human1.age);
human1.eat();
human1.drink();
human1.sleep();


var human2 = {  // human is an object

    name: "Morty",  // property
    age: 16,       // property

    eat : function(){
        console.log("Morty is eating food")
    },

    drink : function(){
        console.log("Morty is drinking water *burp*")
    },

    sleep : function(){
        console.log("Morty is asleep");
    }
};

console.log(human2);
console.log(human2.name);
console.log(human2['name'])
console.log(human2.age);
human2.eat();
human2.drink();
human2.sleep();