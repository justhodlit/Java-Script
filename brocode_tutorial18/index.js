/*
    date object = represents a moment in time
                  since epoch (reference point)
*/
/// epic date
date = new Date(0);
console.log(date);


date = new Date(10000000);
console.log(date);


date = new Date(1000000000000);
console.log(date);


//current date

date = new Date();
console.log(date);


date = new Date(2022, 3, 4, 18, 30, 2, 3); // year, month(0~11), date, hour, min, sec, mil-sec
console.log(date);


date = new Date("April 20, 2022 16:20:01:02");
console.log(date);

//////// get year, month, date, hours... etc. from the date I gave above

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();

console.log(year);
console.log(month);
console.log(dayOfWeek);
console.log(dayOfMonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliSeconds);


////// making a reference point

date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date)