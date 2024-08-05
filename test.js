// // *************************-Uraan Daily test-*******************************

// Uraan Daily test #11



//____________________________________________________________________________________________________________________
 
// // ----------------------------------------------------------------

// Uraan Daily test #10  

// Q1 Null is a valid data type in Javascript: Select True or False.
 
// A. True 
// B. False

// Feedback
// Answer: A
// Null is a primitive data type in JavaScript. It is used to represent an empty value. The variable which has been assigned as null contains no value.

// //----------------------------------------------------------------------

// Q2 What will be the console output of the below JS code: 

// let a; 
// console.log(a);

// A. Null
// B. Undefined 
// C. 0
// D: 1

// Feedback
// Answer: B
// Here, no value has been assigned to 'a', therefore it is undefined.

// //------------------------------------------------------------
 
// Q3 Which of the following is NOT a valid data type in JS?
 
// A. Symbol
// B. Void
// C. Object
// D. Undefined

// Feedback
// Answer: B
// 'Void' is not a data type in JS. Valid data types in JS are:
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// //-------------------------------------------------------------
 
// Q4 What will be the console output of the below JS code? 

// let a=null; 
// console.log(a);
 
// A. undefined
// B. Uncaught Reference Error
// C. 0
// D. null
 
// Feedback
// Answer: D
// 'null' will be printed on the console because the variable 'a' is initialized with a null value which means 'a' is empty.

// //--------------------------------------------------------

// Q5 What will be the console output of the below JS code? 

// let a=hello; 
// console.log(a);
 
// A. Uncaught ReferenceError: hello is not defined 
// B. undefined
// C. null
// D. hello

// Feedback
// Answer: A
// The word 'hello' cannot be resolved to any data type. Therefore, there will be an 'Uncaught ReferenceError: Hello is not defined' on the console.

// //-----------------------------------------

// Q6 What will be the console output of the below JS code? 

// let a="hello";
// console.log(a);
 
// A. undefined
// B. null
// C. hello
// D. Uncaught ReferenceError: hello is not defined

// Feedback
// Answer: C
// Here, the word 'hello' (written inside double quotes) is resolved as a string data type. Therefore, 'hello' will be printed on the console output.

// //----------------------------------------------

// Q7 What will be the console output of the below JS code? 

// let a ="8"+"8"; 
// console.log(a);

// A. NaN
// B. 88 
// C. 16
// D. Uncaught Reference Error

// Feedback
// Answer: B
// Both the eights written inside double quotes will be treated as strings, and the plus operator will concatenate these two strings. Therefore, the console output will be 88.

// //-------------------------------------------

// Q8 Identify whether the below Javascript code is a valid or an invalid code: 

// let a=[34,"hello",false, 4599];
 
// A. Valid 
// B. Invalid

// Feedback
// Answer: A
// The given javascript code is a valid statement. The array in Javascript can contain mixed (different) data types.

// //-------------------------------------------

// Q9 What will be the console output of the below JS code? 

// let a="8"/8; 
// console.log(a);
 
// A. NaN
// B. undefined
// C. 1 
// D. Uncaught Reference Error

// Feedback
// Answer: C 

// //--------------------------------------------------------
 
// Q10 The below JS code is an ______ 

// let a = {name:"Sarah", age:24, address: "7 north block"}

// A. Array
// B. Symbol
// C. Object
// D. None of the above

// Feedback
// Answer: C 

// //------------------------------------------

// Q11 Write a Program to print the shown pattern
 
// 1
// 12
// 123
// 1234
// 12345
// 123456

//     let n = 6
//     let result = '';
//         for (let i = 1; i <= n; i++) { 
//             for(let j=1; j<=i; j++){
//                 result = result + j;   
//             } 
//             result = result + "\n";
             
//             }
//     console.log(result)
    
// //----------------------------------
   
// Q12 Write a Program to print the shown pattern

// 123456
// 12345
// 1234
// 123
// 12
// 1
//     let n = 6
//     let result = '';
//         for (let i = n; i >= 1; i--) { 
//             for(let j=1; j<=i; j++){
//                 result = result + j;   
//             } 
//             result = result + "\n";
             
//             }
//     console.log(result)

//-------------------------------------------------------------------

//____________________________________________________________________________________________________________________
 
// // ----------------------------------------------------------------

// Uraan Daily test #9  

// Q1 What does this return? [...'Lydia'];
 
// A: ["L", "y", "d", "i", "a"]
// B: ["Lydia"]
// C: [[], "Lydia"]
// D: [["L", "y", "d", "i", "a"]]

// Feedback
// Answer: A
// A string is an iterable. The spread operator maps every character of an iterable to one element.

// //------------------------------------------- 

// Q2 What's the output?

// function* generator(i) {
//     yield i;
//     yield i * 2;
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
 
// A: [0, 10], [10, 20]
// B: 20, 20
// C: 10, 20
// D: 0, 10 and 10, 20

// Feedback
// Answer: C
// Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a yield keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t return the value, it yields the value.
// First, we initialize the generator function with i equal to 10. We invoke the generator function using the next() method. The first time we invoke the generator function, i is equal to 10. It encounters the first yield keyword: it yields the value of i. The generator is now "paused", and 10 gets logged.
// Then, we invoke the function again with the next() method. It starts to continue where it stopped previously, still with i equal to 10. Now, it encounters the next yield keyword, and yields i * 2. i is equal to 10, so it returns 10 * 2, which is 20. This results in 10, 20.

// // ----------------------------------------------------------------

// Q3 What does this return? 

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// });
// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// A: "one"
// B: "two"
// C: "two" "one"
// D: "one" "two"

// Feedback
// Answer: B
// When we pass multiple promises to the Promise.race method, it resolves/rejects the first promise that resolves/rejects. To the setTimeout method, we pass a timer: 500ms for the first promise (firstPromise), and 100ms for the second promise (secondPromise). This means that the secondPromise resolves first with the value of 'two'. res now holds the value of 'two', which gets logged.
 
// // ----------------------------------------------------------

// Q4 What's the output?

// let person = { name: 'Lydia' }; 
// const members = [person]; 
// person = null; console.log(members);
 
// A: null
// B: [null]
// C: [{}]
// D: [{ name: "Lydia" }]
 
// Feedback
// Answer: D
// First, we declare a variable person with the value of an object that has a name property.
// Then, we declare a variable called members. We set the first element of that array equal to the value of the person variable. Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, you make a copy of that reference. (note that they don't have the same reference!)
// Then, we set the variable person equal to null.
// We are only modifying the value of the person variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in members still holds its reference to the original object. When we log the members array, the first element still holds the value of the object, which gets logged.

// // --------------------------------------------------------

// Q5 What's the output? 

// const person = { name: 'Lydia', age: 21, };
// for (const item in person) {
//     console.log(item);
// }
 
// A: { name: "Lydia" }, { age: 21 }
// B: "name", "age"
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]
 
// Feedback
// Answer: B
// With a for-in loop, we can iterate through object keys, in this case name and age. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of item equal to the current key it’s iterating over. First, item is equal to name, and gets logged. Then, item is equal to age, which gets logged.

//  // -----------------------------------------------------------------

// Q6 What's the output? console.log(3 + 4 + '5');
 
// A: "345"
// B: "75"
// C: 12
// D: "12"

// Feedback
// Answer: B
// Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the same precedence. We only have one type of operator: +. For addition, the associativity is left-to-right.
// 3 + 4 gets evaluated first. This results in the number 7.
// 7 + '5' results in "75" because of coercion. JavaScript converts the number 7 into a string, see question 15. We can concatenate two strings using the +operator. "7" + "5" results in "75".
 
// // ----------------------------------------------------------------

// Q7 What's the value of num? const num = parseInt('7*6', 10);

// A: 42
// B: "42"
// C: 7
// D: NaN

// Feedback
// Answer: C
// Only the first number in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.
// * is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7. 

// // ---------------------------------------------------------------------------------

// Q8 What's the output?

// [1, 2, 3].map(num => {
//     if (typeof num === 'number')
//         return;
//     return num * 2;
// });
 
// A: []
// B: [null, null, null]
// C: [undefined, undefined, undefined]
// D: [ 3 x empty ]

// Feedback
// Answer: C
// When mapping over the array, the value of num is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement typeof num === "number" returns true. The map function creates a new array and inserts the values returned from the function.
// However, we don’t return a value. When we don’t return a value from the function, the function returns undefined. For every element in the array, the function block gets called, so for each element we return undefined.
 
// // -------------------------------------------

// Q9 What's the output?

// function getInfo(member, year) {
//     member.name = 'Lydia';
//     year = '1998';
// }
// const person = { name: 'Sarah' };
// const birthYear = '1997';
// getInfo(person, birthYear);
// console.log(person, birthYear);
 
// A: { name: "Lydia" }, "1997"
// B: { name: "Sarah" }, "1998"
// C: { name: "Lydia" }, "1998"
// D: { name: "Sarah" }, "1997"

// Feedback
// Answer: A
// Arguments are passed by value, unless their value is an object, then they're passed by reference. birthYear is passed by value, since it's a string, not an object. When we pass arguments by value, a copy of that value is created (see question 46).
// The variable birthYear has a reference to the value "1997". The argument year also has a reference to the value "1997", but it's not the same value as birthYear has a reference to. When we update the value of year by setting year equal to "1998", we are only updating the value of year. birthYear is still equal to "1997".
// The value of person is an object. The argument member has a (copied) reference to the same object. When we modify a property of the object member has a reference to, the value of person will also be modified, since they both have a reference to the same object. person's name property is now equal to the value "Lydia"

// //---------------------------------------------------------------

// Q10 What's the output? 

// function greeting() {
//     throw 'Hello world!';
// }
// function sayHi() {
//     try {
//         const data = greeting();
//         console.log('It worked!', data);
//     }
//     catch (e) {
//         console.log('Oh no an error:', e);
//     }
// }
// sayHi();
 
// A: It worked! Hello world!
// B: Oh no an error: undefined
// C: SyntaxError: can only throw Error objects
// D: Oh no an error: Hello world!
 
// Feedback
// Answer: D
// With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string 'Hello world!'.
// With the catch statement, we can specify what to do if an exception is thrown in the try block. An exception is thrown: the string 'Hello world!'. e is now equal to that string, which we log. This results in 'Oh an error: Hello world!'.

//---------------------------------------------------------------------

// Q11 Write a Program to print the shown pattern
//  out put
// ******
// *    *
// *    *
// *    *
// *    *
// ******


// let n = 6
// let star = ""
// for(let i = 0; i < n; i++) {  
//   for(let j = 0; j < n; j++) {  
//     if(i === 0 || i === n - 1) {
//         star = star + "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         star = star + "*";
//       }
//       else {
//         star = star + " ";
//       }
//     }
//   } 
//   star = star + "\n";
// } 
// console.log(star );

//------------------------------------------------------------

// Q12 Write a Program to print the shown pattern
// out put 
// 1 
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// // function createNumberPattern(n) {
// let n = 5
// let result = '';
//     for (let i = 1; i <= n; i++) {
//         // Add spaces before the numbers
//         for (let j = 1; j <= n - i; j++) {
//             result += ' ';
//         }
//         // Add the numbers in ascending order
//         for (let k = 1; k <= i; k++) {
//             result += i + ' ';
//         }
//         result += '\n';
//     }
//     // return result;
// console.log(result)
// }

//  // const height = 5; // Adjust the height as needed
// // console.log(createNumberPattern(height));

//----------------------------------------------------------------
 
//____________________________________________________________________________________________________________________
 

// // ----------------------------------------------------------------

// // Uraan Daily test #8

// Q1 What is the use of the <noscript> tag in Javascript?

// A: The content are displayed by non-JS-based browsers
// B: Clears all the cookie and cache
// C: Both A & B
// D: Non of the above.

// Feedback
// Answer: A
// The <noscript> tag is displayed by non-Javascript browsers only.

// //---------------------------------------

// Q2 What's the output?

// function sayHi() {
//     return (() => 0)();
// }
// console.log(typeof sayHi());

// A: "object"
// B: "number"
// C: "function"
// D: "undefined"

// Feedback
// Answer: B
// The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".
// FYI: typeof can return the following list of values: undefined, boolean, number, bigint, string, symbol, function and
// null return object

// //--------------------------------

// Q3 Which of these values are falsy?

// 0;
// new Number(0);
// ('');
// ('');
// new Boolean(false);
// undefined;

// A: 0, ", undefined
// B: 0, new Number(0), ", new Boolean(false), undefined
// C: 0, ", new Boolean(false), undefined
// D: All of them are falsy

// Feedback
// Answer: A
// There are 8 falsy values:
// undefined
// null
// NaN
// FALSE
// '(empty string)
// 0
// 0
// On (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.

// //----------------------------------------------------

// Q4 What's the output? 

// console.log(typeof typeof 1);

// A: "number"
// B: "string"
// C: "object"
// D: "undefined"

// Feedback
// Answer: B
// typeof 1 returns "number". typeof "number" returns "string"

// //--------------------------------------------------------

// Q5 What's the output? 

// const numbers = [1, 2, 3]; 
// numbers[10] = 11; 
// console.log(numbers); 

// A: [1, 2, 3, null x 7, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, empty x 7, 11]
// D: SyntaxErroг
 
// Feedback
// Answer: C
// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:
// [1, 2, 3, empty x 7, 11]
// depending on where you run it (it's different for every browser, node, etc.)

// //---------------------------------------------------

// Q6 What's the output? 

//     (() => {
//         let x, y;
//         try {
//             throw new Error();
//         }
//         catch (x) {
//             (x = 1), (y = 2);
//             console.log(x);
//         }
//         console.log(x);
//         console.log(y);
//     })
//     ();

// A: 1 undefined 2
// B: undefined undefined undefined
// C: 112
// D: 1 undefined undefined

// Feedback
// Answer: A
// The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.
// Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.
// Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.

// //--------------------------------

// Q7 Everything in JavaScript is  either a...

// A: primitive or object
// B: function or object
// C: trick question! only objects
// D: number or object

// Feedback
// Answer: A
// JavaScript only has primitive types and objects.
// Primitive types are boolean, null, undefined, bigint, number, string, and symbol.
// What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. String, and then immediately discard the wrapper after the expression evaluates. All primitives except for null and undefined exhibit this behavior.

// //----------------------------------

// Q8 What's the output?
 
// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//         return acc.concat(cur);
//     },
//     [1, 2],
// );

// A: [0, 1, 2, 3, 1, 2]
// B: [6, 1, 2]
// C: [1, 2, 0, 1, 2, 3]
// D: [1, 2, 6]

// Feedback
// Answer: C
// [1, 2] is our initial value. This is the value we start with, and the value of the very first acc. During the first round, acc is [1,2], and cur is [0, 1]. We concatenate them, which results in [1, 2, 0, 1).
// Then, [1, 2, 0, 1] is acc and [2, 3] is cur. We concatenate them, and get [1, 2, 0, 1, 2, 3]

// //---------------------------------------------------

// Q9 What's the output? 

// !!null; 
// !!"; 
// !!1;

// A: false true false
// B: false false true
// C: false true true
// D: true true false

// Feedback
// Answer: B
// null is falsy. Inull returns true. !true returns false.
// "" is falsy.!"" returns true. !true returns false.
// 1 is truthy. !1 returns false. !false returns true.

// //-------------------------------------------------

// Q10 What does the setInterval method return in the browser? 

//     setInterval(() =>
//         console.log('Hi'), 1000);

// A: a unique id
// B: the amount of milliseconds specified
// C: the passed function
// D: undefined

// Feedback
// Answer: A
// It returns a unique id. This id can be used to clear that interval with the clearInterval() function.

// //--------------------------------------------------------------

// Q11 Write a Program to print the shown pattern


//         *     
//        ***    
//       *****   
//      *******  
//     ********* 
//    ***********
//   *************
//  ***************
// *****************

// let n = 9;
// let string = ""; 
// for (let i = 1; i <= n; i++) { 
//   for (let j = 1; j <= n - i; j++) {
//     string = string + " ";
//   } 
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string = string + "*";
//   }
//   string = string +"\n";
// }
// console.log(string);
 
// //----------------------------------------------------

// Q12 Write a Program to print the shown pattern


// *****************
//  ***************
//   *************
//    ***********
//     *********
//      *******
//       *****
//        ***
//         *

// let n = 9;
// let string = ""; 
// for (let i = 0; i < n; i++) { 
//   for (let j = 0; j < i; j++) {
//     string = string + " ";
//   } 
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string = string + "*";
//   }
//   string = string + "\n";
// }
// console.log(string);

//-----------------------------------------------------------

//____________________________________________________________________________________________________________________
 
// // ----------------------------------------------------------------

// // Uraan Daily test #7

// Q1 What keyword is used to check whether a given property is valid or not?

// A. in
// B. is in
// C. exists
// D. lies

// CORRECT ANS. A in

// //-------------------------------------

// Q2 What will be the output of the following code sippet? 

//     <script type="text/javascript" language="javascript">
//         var x= 12;
//         var y=8;
//         var res=eval("x+y");
//         document.write(res),
//     </script>
   
// A. 20
// B. x+y
// C. 128
// D. None of the above

// CORRECT ANS. A 20

// //--------------------------------------------

// Q3 What will be the output of the following code anippet? 

//     <script type="text/javascript" language="javascript">
//         var a = "Scaler";
//         var results = a.substring(2, 4);
//         document.write(results);
//     </script >

// A. al
// B. ale
// C. cal
// D.caler

// CORRECT ANS. A al

// //-----------------------------------------------------


// Q4 Which of the following methods is used to access HTML elements using  Javascript?

// A. getElementbyid()
// B. getElementsByClassName()
// C. Both A and B
// D. None of the above

// CORRECT ANS.  C. Both A and B

// //--------------------------------------------

// Q5 What will be the Output of this programy?

//     function sayHi() {
//         console.log(name);
//         console.lograge);
//         var name = 'Lydia';
//         let age = 21;
//     }
// sayHi().

// A: Lydia and undefined
// B: Lydia and ReferenceError
// C. ReferenceError and 21
// D. undefined and ReferenceError

// Feedback
// Answer D: undefined and ReferenceError
// Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

// //--------------------------------------

// Q6 What's the output?

// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
// }
//     constructor({ newColor = 'green' } = {}) {
//         this.newColor = newColor;
// }
// }
// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// A: orange
// B. purple
// C: green
// D: TypeError

// Feedback
// Answer: D
// The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be bassed down to any children or called upon class instances Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown
// Answer D
// The colorChange function is static Statio methods are designed to live only on the constructor in which they are created and cannot be passed down to any children or
// called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown Turn on screen reader support
// To enable screen reader support, press+Option+Z To learn about keyboard shortcuts, press slash

// //----------------------------------------------------------

// Q7 What happens when we do this? 

//     function bark() {
//         console.log('Wooff');
//     }
//     bark.animal = 'dog',

// A. Nothing, this is totally fine!
// B. SyntaxError You cannot add properties to a function this way.
// C. Woof gets logged
// D. ReferenceError

// Feedback
// Answer: A
// This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)
// A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

// //-----------------------------------------------

// Q8 What's the output?

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };
// console.log(member.getFullName());

// A: TypeError
// B SyntaxError
// OC Lydia Halle
// D. undefined undefinen

// Answer: A
// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(). but member getFullName throws a TypeError.
// If you want a method to be available to all object instances, you have to add it to the prototype property:
// Person.prototype getFullName function() {
//     return `${this.firstName} ${this.lastName}`

// //------------------------------------------------------------

// Q9 All object have prototypes.

// A.  true
// B.  false

// Correct answer
// B. false

// //-------------------------------

// Q10 What's the output?

//     function getPersoninfo(one, two, three) {
//         console.log(one);
//         console.log(two);
//         console.log(three);
//     }

//     const person = 'Lydia';
//     const age = 21;
//     getPersonInfo`${person} is ${age} years old`;

// A. "Lydia" 21 ["", "is", "years old"]
// B. ["", "is", "years old"] "Lydia" 21
// C. "Lydia" ["", "is", "years old"] 21

// Correct answer
// B. ["", "is", "years old"] "Lydia" 21

// //-------------------------------------------------------

// Q11 What's the output?

//     function getAge() {
// use strict;
//         age = 21;
//         console.log(age);
//     }
//     getAge();

// A: 21
// B: undefined
// C: ReferenceError
// D: TypeError

// Correct answer

// C. ReferenceError

// //--------------------------------------------------

// Q12 Write a Program to print the shown pattern

// outPut
// *
// **
// ***
// ****
// *****
// ******
// *******

// let n = 7;
// let  star = "";

// for (let i = 7; i <= n; i++){ 
//   for (let j = 0; j < i; j++) {
//      star =  star +  "*";
//   }
//   star =  star +  "\n";
// }

// console.log(star);

// //--------------------------------------------------

// Q13 Write a Program to print the shown pattern

// output 
// *******
// ******
// *****
// ****
// ***
// **
// *

// let n = 7;
// let  star = "";

// for (let i = 0; i <= n; i++) { 
// for (let j = 0; j < n - i; j++){
//      star =  star +  "*";
//   }
//   star =  star +  "\n";
// }

// console.log(star);

//-----------------------------------------------------

//____________________________________________________________________________________________________________________
 
// // ----------------------------------------------------------------

// // Uraan Daily test #6

// Q1 Arrays are mutable in nature
 
// A. True
// B. False

// Feedback
// Answer: A
// Arrays are indeed mutable in nature i e. they can be modified in-place. Hence, the given statement is true.
 
// //-----------------------

// Q2 Strings are immutable in nature. True or false?

// A. True
// B. False

// Feedback
// Answer: A
// Strings are immutable in nature ie they can't be modified once created. Hence, the given statement is true

// //-----------------------------------------------------------------

// Q3 What does the following code log?

// var chars = ['z', 'c', 'a', 'i']
// console.log(chars.sort());

// A. ['a', 'c','i' ,'z']
// B. [' z', ' i',' c' ,' a']
// C. undefined

// Feedback
// Answer. A
// chars.sort() sorts the array chars in alphabetical order. It returns [a', 'c', ', 'z') and this goes with choice (A)

// //------------------------------------------------------------------

// Q4 Functions in JavaScript are also called? 

// A. Mappings
// B. Primitives
// C. Code blocks
// D. Callable objects

// Correct answer 

// D. Callable objects

// //----------------------------------------------------------    

// Q5 Which of the following keywords is used to denote a function in JavaScript?

// A. f
// B. fx
// C. func
// D. function

// Feedback
// Answer: D
// function is the keyword that denotes a function in JavaScript. Hence, the correct choice is (D)

// //------------------------------------------------------

// Q6 Identify the parameter in the code below 

// function sayHello(name) {
//     console.log('Hello' + name);
// }

// sayHello(Programmer");

// A. name
// B.'Programmer'
// C. console.log()
// D.There is no parameter

// Correct answer
// A. name

// //-------------------------------

// Q7 What does the following code log? console.log(typeof's');
    
// A. string
// B. String
// C. 'single-quote string'
// D. 'double-quote string'

// Correct answer
// A 'string'

// //-------------------------

// Q8 What does the following code log?
//     console.log(typeof []):

// A. array
// B. object
// C.  string
// D. plain object

// Correct answer
// B object
// //--------------------------------

// Q9 What does the following code log? console.log(typeof null);

// A.  null
// B. object
// C.  string
// D. plain object

// //--------------------------------------------

// Q10 Write a JavaScript conditional statement to find the largest of five numbers.
// Display an alert box to show the results. Sample numbers: -5, -2, -6, 0, -1 Output: 0

// var a = - 5
// var b = - 2 
// var c = - 6
// var d = 0
// var f = - 1
// if (a > b && a>c && a> d && a> f) {
//     alert(a);
// } 
// else if (b>a && b>c && b>d && b>f ){
//     alert(b);
// } 
// else if (c>a && c>b && c>d && c > f ){
//     alert(c);
// } 
//  else if ( d > a &&  d >c && d> b  &&  d>f ) {
// alert(d);
// }
// else {
// alert(f);
// }

//-----------------------------------------------------------------------------

// Q11 
// Output: 4, 0, -1

// let num1 =0
// let num2 = -1
// let num3 = 4

// if(num1> num2 && num1 > num3){
//      if(num2>num3){
//           alert( num1 +","+ num2 +","+ num3)
//      }
//      else{
//           alert(num1 ,num3,num2)
//      }
// } else if (num2 > num1 && num2 > num3) {
//      if (num1 > num3) {
//           alert(num2 ,  num1  ,   num3);
//      } else {
//           alert(num2  ,  num3  ,  num1);
//      }
//  } else if (num3 > num1 &&  num3 > num2) {
//      if (num1 > num2) {
//           alert(num3  ,  num1  , num2);
//      } else {
//           alert(num3  , num2 , num1);
//      }
//  }      

//------------------------------------------------------------------------------

//____________________________________________________________________________________________________________________
  
// // ----------------------------------------------------------------

// Uraan Daily test #5 

// Q1 Which of the following values are primitives?

// A: 5
// B: 'Hello'
// C: true
// D: All of the above

// Feedback
// Answer: D
// Numbers, strings and booleans, all in their literal forms belong to the primitive category of JavaScript's data types. The correct answer is therefore D.

// //------------------------------------

// Q2 A primitive value has properties and methods on it. True or false?

// A. True
// B. False

// Feedback
// Answer: B
// A primitive value is one that has no properties and methods attached to it. Hence, the correct choice is (B).

// //-------------------------------------------------------

// Q3 document is a primitive value. True or false?
 
// A. True
// B. False

// Correct answer
// B. False

// //--------------------------------------------------

// Q4 Which one of the following is a floating-point number?
 
// A. 10
// B. 10.3
// C. '10.2'
// D. Both B and C

// Feedback
// Answer: B
// A floating-point number has a decimal point in it. This only applies to choice (B). Choice (C) is a string, not a float.

// //-----------------------------------------------

// Q5 JavaScript has separate data types for integers and floats. True or false?
 
// A. True
// B. False

// Feedback
// Answer: B
// JavaScript has only one type for intergers and floats and that is Number. Hence, the correct choice is (B).

// //-----------------------------------------------------------

// Q6 What does the following code log?
//  var s = 'Hello';
// console.log(s[1]);
 
// A. 'H'
// B. 'e'
// C. It throws an error

// Feedback
// Answer: B
// s[1] returns the second character of s, which is 'e'. Hence, the correct choice is (B).

// //-----------------------------------------------------------

// Q7 How to retrieve the total number of characters of a string s?
 
// A. s.chars
// B. s.length
// C. s.number
// D. s.totalChars

// Feedback
// Answer: B
// The total number of characters of a string is known as its length and could be retrieved by accessing the length property on the string. Hence, the correct choice is (B).

// //--------------------------------------------------

// Q8 Which of the following denotes a Boolean in JavaScript?
 
// A. TRUE
// B. True
// C. Both of the above
// D. None of the above

// Feedback
// Answer: D
// true and false are the Boolean values in JavaScript. They are case-sensitive in nature. Hence, none of the following denotes a Boolean. This goes with choice (D)

// //--------------------------------------------------------------------------

// Q9  In the code below, what is the value stored in the variable a called?  var a = [1, 2, 3];
 
// A. Primitive
// B. Array
// C. String
// D. Plain object

// Feedback
// Answer: B
// [1, 2, 3] is called an array. This goes with choice (B)

// //--------------------------------------------------------------
// Q10 Which of the following represents array literals?

// A. ''
// B. []
// C. {}
// D. ()

// Correct answer
// B. []

// //--------------------------------------------------------------

// Q11 Write a JavaScript program that displays the largest integer among two integers.
 
// function largestNumber(num1, num2) {

//     if (num1 > num2) {
//         console.log("num1 is largest", num1)
//     }
//     else {
//         console.log("num2 is largest", num2)
//     }
// }
// largestNumber(20, 40);

// //--------------------------------------------------------

// Q12 Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

// let num1 = 3
// let num2 = -7
// let num3 = 2
// result = num1 * num2 * num3
// if (result > 0) {
//     console.log("The sign is = + ")

// }
// else {
//     console.log("The sign is = - ")
// }

//------------------------------------------------------------

//____________________________________________________________________________________________________________________
  
// // ----------------------------------------------------------------

// // Uraan Daily test #4 
 
// Q1 What's the output? 

// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);
// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);

// C: true true false true
// D: true true true true

// Feedback
// Answer: C
// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.
// It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.

// //---------------------------------

// Q2 What's the output? 

// const obj  = {a: 'one', b: 'two', a: 'three'}; 
// console.log(obj);

// A: (a: "one", b: "two"}
// B: {b: "two", a: "three"}
// C: {a: "three", b: "two")
// D: SyntaxError

// Feedback
// Answer: C
// If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

// //--------------------------------------

// Q3 The JavaScript global execution context creates two things for you: the global object, and the "this" keyword. 

// A: true
// B: false
// C: it depends

// Feedback
// Answer: A
// The base execution context is the global execution context: it's what's accessible everywhere in your code.

// //-------------------------------

// Q4 What's the output? 

// for (let i = 1; 15; i++) {
//     if (i === 3)
//         continue;
//     console.log(i);
// }

// A:12
// B:123
// C:124
// D:134

// Feedback
// Answer: C The continue statement skips an Iteration if a certain condition returns true.

// //-------------------------------

// Q5 What's the output?

// String.prototype.giveLydiaPizza = () => {
//     return "Just give Lydia pizza already!";
// };
// const name = 'Lydia';
// console.log(name.giveLydiaPizza())

// A: "Just give Lydia pizza already!"
// B: TypeError: not a function
// C: SyntaxError
// D: undefined

// Feedback
// Answer: A String is a built-in constructor, that we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

// //----------------------------------

// Q6 What's the output? 

// const a = {};
// const b = (key: 'b');
// const c = { key: 'c'};
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// A: 123
// B: 456
// C: undefined
// D. ReferenceError

// Feedback
// Answer. B
// Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.
// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that al [object Object] 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, al [object Object/1 = 456.
// Then, we log alb), which is actually al [object Object]. We just set that to 456, so it returns 456.

// //-----------------------------------

// Q7 What's the output? 

// const foo = () =>
//     console.log('First');
// const bar = () => setTimeout(() =>
//     console.log('Second'));
// const baz = () =>
//     console.log("Third");
// bar();
// foo();
// baz();

// A: First Second Third
// B: First Third Second
// C: Second First Third
// D: Second Third First
 
// //-------------------------

// Q8 What is the event.target when clicking the button? 

//     <div onclick="console.log('first div')">
//         <div onclick="console.log('secon d div')">
//             <button onclick="console.log('button' )"> Click! </button>
//         </div>
//     </div>

// A: Outer div
// B: Inner div
// C: button
// D: An array of all nested elements.

// Feedback
// Answer. C The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation

// //-----------------------------------

// Q9 When you click the paragraph, what's the logged output?
 
//     < div onclick = "console.log('div')" >
//         <p onclick="console.log('p')"> Click here! </p>
//     </div>

// A: div
// B: div p
// C: p
// D: div

// Correct answer
// A: p div

// //------------------------------

// Q10 What's the output? 

// const person = (name: 'Lydia');
// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHl.bind(person, 21));

// A: undefined is 21 Lydia is 21 X
// B: function function
// C: Lydia is 21 Lydia is 21
// D: Lydia is 21 function

// Correct answer
// D: Lydia is 21 function

// //-------------------------------------------------------

// Q11 Write a JavaScript function to check if a given number is prime

// function primeNo(n) {
//     let i,
//         flag = true;
//     for (i = 2; i < n - 1; i++) {
//         if (n % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag == true) {
//         console.log(n + " is prime");
//     }
//     else {
//         console.log(n + "is not prime");
//     }
//     primeNo();
// //************************** */OR/**************************/

// let num=18
// let i,v=0;
// if(num==0||num==1)
// {
//   console.log("this is nor prime numner :");
// }
// for(i=2;i<=num;i++)
// {
//   v=0
//   if(num%2==0)
//   {
//     v=1;
//     break;
//   }
// }
// if(v==1)
// {
//   console.log("this is not prime number");
// }
// else
// {
//   console.log("this is prime number");
// }

// //----------------------------------------------------------------    

// Q12 Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;

//----------------------------------------

//__________________________________________________________________________________________________________________________

















// // console.log("Uraan Soft Skils placement-prep Daily Test")

// // =================================================
 
 

// //----------------------------------------

// // if(num3>num2&& num3>num1&& num1>num2)
// // {
// //      alert(`${num3},${num1},${num2}`)
// // }


// //-------------------------------------------
// // 

// // ============================

 
 




















// // Q1.  reverse string without useing methode

// // let str = "Abraa-Ka-Daabraa"
// // for(i=str.length-1;i>=0;i--)
// // {
// //     console.log(str[i]);
// // }
// //  =======================================================

// //======================================================

// // Q2. string  is a Palindrome or Not 

// // function isPalindrome(string) {
// //     let reversedStr = "";
// //     for (let i = string.length - 1; i >= 0; i--) {
// //         reversedStr += string[i];
// //     }

// //     if (string === reversedStr) {
// //         console.log("The string is a palindrome.");
// //     } else {
// //         console.log("The string is not a palindrome.");
// //     }
// // }
// // isPalindrome('abccba')
// // isPalindrome('abccbafgg')

// //===========================================



// console.log(3 + 4 + '5');
// const num = parseInt('7*6', 10);
// console.log(num)

// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     console.log(num * 2);
// });


// function getInfo(member, year) {
//     member.name = 'Lydia'; year = '1998';
// }
// const person = { name: 'Sarah' };
// const birthYear = '1997';
// getInfo(person, birthYear);
// console.log(person, birthYear);



// function greeting() {
//     throw 'Hello world!';
// }
// function sayHi() {
//     try {
//         const data = greeting();
//         console.log('It worked!', data);
//     }
//     catch (e) {
//         console.log('Oh no an error:', e);
//     }
// }
// sayHi()

// --------------------------------
