/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE

Datatype:- A data type in languge defines the type of data a variable. 
There are eight datatypes in Javascript:-
 Primitive datatypes:-
    1. String:- The string datatype in javascript can be group of characters enclosed by a single or double quotes or by backticks.
    2. Number:- A number datatype can be an integer, a floating point value, an exponential value, a 'NaN' or a 'infinity'.
    3. Null:- The null in javascript is a data type that is represent only one value, the "null" itself. A null value means no value
    4. Undefined:- It means variable not defined. The variable is declared but doesn't contain any value.
    5. Boolean:- The boolean datatype has only two values, true and false. it is mostly used to check logical condition. it is also use for comparision of tow variables
    6. Symbol:- The "symbol" data type is new in ES6. it is one of the new features in ES6.the symbol datatype defines a property of an oblect.
 Non-primitive datatypes:-
    8. Object:- An object in javascript contains key-value pairs.


*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
 Variable:- variable are containers for storing data.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
/* WRITE YOUR ANSWER HERE */
let val1 = 12;
let val2 = 20;
let addition = val1 + val2;
console.log("Addition of two number:", addition);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
var x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */
let number = 12;
let subtraction = x - number;
console.log('subtraction:', subtraction);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = 'john';
let name2 = 'John';
if (name1 === name2.toLowerCase()) {
    console.log('true');
} else {
    console.log('false');
}


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
let num = 5;
if (num < 10) {
    if (x === 1) {
        console.log("one");
    } else if (num === 2) {
        console.log("two");
    } else if (num === 3) {
        console.log("three");
    } else if (num === 4) {
        console.log("four");
    } else if (num === 5) {
        console.log("five");
    } else {
        console.log("else part");
    }
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
let television = 120;
let shippingcharge = 10;
let total;
television >= 100 ? total = television : total = television + shippingcharge;