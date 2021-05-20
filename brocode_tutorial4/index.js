/* 1. easy but not practical (because it is only with js not with html.
      no need to edit html from the empty one except setting script src)*/
//var myName = window.prompt("What's your name?");
// 'prompt' is a method

//console.log("Hello", myName);


/* 2. with edited html. */

document.getElementById("myButton").onclick = function(){
    var myName = document.getElementById("myText").value;
    console.log("Hello", myName);
}