// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let gender = "female";
let isMale = "male";
let result;
gender === isMale ? result = "male" : result = "female";
console.log("result:", result);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
let num1 = 8;
let num2;

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */
let firstName = "kajal"
let surname = "lathiya"
let fullname = firstName.concat(" ", surname);
console.log('fullname:', fullname);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
/* WRITE YOUR ANSWER HERE */
let x = 2;
let y = 4;
let z = 6;
if (x < y) {
    console.log("value of X less then value of Y");
} else if (y >= x || y > z) {
    console.log("value of Y greter then equal value of X OR Y greter then Z");
} else {
    console.log("else part");
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
let xyz = 15;
let pqr = 20;
let average = ((xyz + pqr) / 2).toFixed(2);
console.log("average:", average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
];
let longest = arr.reduce(
    (a, b) => {
        return a.length > b.length ? a : b;
    }
);
console.log('longest string:', longest);

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */
let data = 40;
let value = '40';
if (data === parseInt(data))
    console.log("data is integer")
else
    console.log("data is not an integer")

if (value === parseInt(value))
    console.log("value is integer")
else
    console.log("value is not an integer")

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */
let perArray = [100, 300, 400, 50, 70];
let percentage;
for (let i = 0; i < perArray.length; i++) {
    percentage = perArray[i] * 20 / 100;
    console.log(`the 20% of ${perArray[i]} is ${percentage}`);

}

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
let temp = 10;
if (temp % 2 === 0) {
    console.log(`${temp} is even number`);
} else {
    console.log(`${temp} is odd number`);
}

/* WRITE YOUR ANSWER HERE */
