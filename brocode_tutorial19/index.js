/*
    useful string properties & methods
*/

var myName = "Bro Code";

console.log(myName.length);    // show the length of string
console.log(myName.charAt(0)); // show the letter at that number
console.log(myName.charAt(1));
console.log(myName.charAt(2));
console.log(myName.indexOf(" ")); // show the index of that string
console.log(myName.indexOf("o")); // show the first index of that string
console.log(myName.lastIndexOf("o")); // show the last index of that string
console.log(myName.toUpperCase()); // change into Upper letters
console.log(myName.toLowerCase()); // change into Lower letters

var myName = "    Bro Code    ";

console.log(myName.trim()); // get rid of any spaces before/after the string

/////

var myName = "Bro Code";
var firstName = myName.slice(0, 3);
console.log(firstName);

var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

var lastName = myName.slice(4);
console.log(lastName);

var myName = "Bro The Code";
var lastName = myName.slice(myName.lastIndexOf(" ") + 1); // +1 is to get rid of the space, due to that range contain the blank
console.log(lastName);

////////////////

var myStreet = "123 Fake st.";
var myCity = "Nowhere XY 12345";
var myPhone = "123-456-7890";

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-","")
console.log(myPhone);