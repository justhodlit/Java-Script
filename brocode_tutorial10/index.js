/*
    switch = statement that evaluates a value/expression,
             matches the value to many case clauses
             more efficient that many "else if" statements
*/

// not useful and efficient

var grade = "F";

if(grade == "A"){
    console.log("You did great!");
}
else if(grade == "B"){
    console.log("You did good!");
}
else if(grade == "C"){
    console.log("You did okay");
}
else if(grade == "D"){
    console.log("You... did not do that well");
}
else if(grade == "F"){
    console.log("YOU FAILED!");
}
else{
    console.log(grade, "is not a letter grade");
}


// using switch statement

var grade = "pizza";

switch (grade){
    case "A":
        console.log("You did great!");
        break;

    case "B":
        console.log("You did good!");
        break;

    case "C":
        console.log("You did okay");
        break;

    case "D":
        console.log("You... did not do that well");
        break;
    
    case "D":
        console.log("YOU FAILED!");
        break;
    
    default: // break is like 'else'
        console.log(grade, "is not a letter grade");
        break;
}

// if there's no break, then it won't stop till it reaches the end.