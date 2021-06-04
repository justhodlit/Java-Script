/*
    Math.random() = generates a pseudo-random between 0 and 1
                    Don't use this for security purposes
                    But for game in JS is perfect
*/

var randNum;

randNum = Math.random(); // 0 ~ 1

console.log(randNum);


randNum = Math.floor(Math.random() * 6); // 0 ~ 5

console.log(randNum);


randNum = Math.floor(Math.random() * 6) + 1; // 1 ~ 6 such as Dice

console.log(randNum);


function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

randNum = getRandomNum(1, 6); // 1 ~ 6 with function such as Dice
console.log(randNum);