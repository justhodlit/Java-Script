/* 
    if statement = a basic form of decision making
                   if a condition is true, then do something
                   if not, then don't do it!

*/

//var age = 18
//var age = 16
//var age = 80
var age = -1;

if(age >= 65){
    console.log("You are a senior!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else if(age < 0){
    console.log("You haven't been born yet!");
}
else{
    console.log("You are a child!");
}


/// boolean - only true or false. only two options

var online = false;

if(online == true){
    console.log("Bro is online");
}
else{
    console.log("Bro is offline");
}

/* shortcut of the above. just put the value,
   then it automatically means true.
   
if(online){
    console.log("Bro is online");
}
else{
    console.log("Bro is offline");
}
*/