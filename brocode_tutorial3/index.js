/*
    arithmetic expression
    is some combination of
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value

*/

var friends = 10;

//friends = friends + 1;
//friends = friends - 1;
//friends = friends * 2;
//friends = friends / 2;
//friends = friends ** 2; // power of

//shortcuts of the first step
//friends += 1;
//friends -= 1;
//friends *= 2;
//friends /= 2;
//friends **= 2; // power of shortcut


console.log(friends);

var remaingingFriends = friends % 3;
//friends %= 3;

console.log(remaingingFriends);


/*
    operator precedence (basic arithmetic stuffs)
    1. parenthesis ()
    2. exponents
    3. multiply * & divide /
    4. addition + & subtraction -
*/

friends = 10 + 2 / 2;
console.log(friends)

friends = (10 + 2) / 2;
console.log(friends)