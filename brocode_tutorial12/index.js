/*
    while loop = repeats some code, while the
                 loop's condition remains true

*/

///// ver1

var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR INFO...");

while(creditNum == ""){
    creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR INFO...");
}

console.log("THANK YOU! Your computer no longer has a virus!")


///// ver2

do{
    var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR INFO...");
}while(creditNum == "")

console.log("THANK YOU! Your computer no longer has a virus!")