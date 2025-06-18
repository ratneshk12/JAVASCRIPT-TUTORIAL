// loop (loops are used to execute a piece of code again and again)





// For Loop

//  for(let i = 1; i <= 10; i++){``
//     console.log("Ratnesh");
//  }
//  console.log("loop ended")



//To calculate sum of 1 to 5

// let sum = 0;
// for(let i = 1; i<=5; i++){
//    sum = sum + i;
// }
// console.log("sum=", sum);

// infinite loop( A loop that never ends)
// for (let i = 1; i>=0; i++){
// console.log("i=", i);
// }



// while loop( no conditions atleast 1 run )

// let i = 1;
// while (i<=5){
//    console.log("i=", i);
// }



//Do while loop (atleast 1 run)

// let i = 20;
//do{
// console.log("Ratnesh")
// i++;
//}while(i <= 10);



//for of loop (use for string & array not for object)

// for(let val of strVar){
//    //do some work
// }

// let str = "ratnesh";
// for(let i of str){
//    console.log("i=", i);
// }


//for in loop

// let student = {
//    name : "Ratnesh kumar",
//    age:20,
//    cgpa:7.8,
//    isPass: true,
// };

// for(let i in student){
//    console.log(i);
// }


// Practice 1
//print all even num from 0 to 100

// for(let num = 0; num <= 100; num++)
// if(num%2 == 0){
//    console.log("num=", num);
// } else {
//    console.log()
// }



//print all odd num from 0 to 100

// for(let num = 0; num <= 100; num++)
// if(num%2 !== 0){
//    console.log("num=", num);
// } else {
//    console.log()
// }

// print 0 to 100 num

// for(let num = 0; num<=100; num++ ){
//    console.log("num=", num)
// }



// Practice 2
//create a game where you start with any random game number .
//  Ask the user to keep guessimg the game number until the
//  user enters correct value.

// let gameNum = 48;

// let userNum = prompt("guess the game number : ");

// while(userNum != gameNum){
//    userNum = prompt("u entered wrong num. guess again : ");
// }
// console.log("congratulation u guess the right number")




//strings in js

// create String

// let str = "Ratnesh";

// string length 

// str.length

// String indices
// str[0],str[2],str[2]


// Template literals in js

// A way to have embedded expressions in String

// string interpolation

// to create strings by doing substitution of placeholders

// let str= "Ratnesh";

// let specialString = `This is a template literal`

//escape literals
// /n


// string methods in js

// these are built in functions to manipulate a strings

// str.toUpperCase() 
// str.toLowerCase()
//  str.trim() removes whitespaces

// javascript string are imutable create a new string
// str.slice(start, end) 
// str1.concat(str2) 
// str.replace(searchVal, newVal)
//  str.charAt(idx)

// prompt the user to enter thier full name.
//  generate a username for them based on thr innput start username 
// with @ , followed by thier full name and ending with the full name length 


