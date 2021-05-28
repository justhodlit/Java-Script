/*
    logical operators = used to write more
                        complex conditions

    && and ( checks if both conditions are true )
    || or (checks if at least 1 condition is true )
    !  not (reverses boolean value )
*/

// and Operator

var temperature = -10; // Celsius

if(temperature > 30){
    console.log("It's HOT outside!");
}
else if(temperature > 0 && temperature <= 30){
    console.log("It is warm outside!");
}
else{
    console.log("It's COLD outside!");
}

// or Operator

var hour = 8; // military time

if(hour < 6 || hour >= 20){
    console.log("It's DARK outside!");
}
else{
    console.log("It's LIGHT outside!");
}

// not Operator

var myName = window.prompt("Enter your name");

if(!(myName == "")){
    console.log("Hello", myName);
}
else{
    console.log("You did not enter your name!");
}