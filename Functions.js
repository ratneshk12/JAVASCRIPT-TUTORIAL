/**
 * functions in js
 * (Block of code that perform a specific task, 
 * can be invoked whenever needed)
 * 
 * 
 */
//

// Function Definition
// function functionName(){
//     //do some work
// }

// //function Call
// functionName();




// function myFunction(){
//     console.log("Ratnesh Kumar!");
//     console.log("we are learning js:");
// }
// myFunction();


//function -> 2 numbers, sum

// function sum(x, y){
//     sum = x + y;
//     return sum;
// }

// let val = sum(3,4);
// console.log(val);

//Arrow function 

// const functionName = (Ratnesh1, Ratnesh2)=>{
// //do some work

// }

// const sum = (a,b)=> {
//     return a + b;
// }


//  function countVowels (str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "A"|| 
//             char === "e"||
//             char === "i"|| 
//             char === "o"|| 
//             char === "u"
//         ){
//             count++; 
//         }
//     }
//     console.log(count);
//  }



//   forEach Loop In Arrays
//   arr.forEach(callBackFunction)
  
//  A callback is a function passed as an 
//  argument to another function.
 
//  arr.forEach((val)=>{
//      console.log(val);
//  })

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val);
// });



// let arr = ["delhi", "mumbai", "new York"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });


// in JavaScript, higher-order functions are functions that either:
// Take other functions as arguments, or
// Return a function as a result.


//Questions 1
// For a given array of numbers , 
// print the sqaure of each value using the forEach loop

// let nums = [2, 3, 4, 5];

// nums.forEach((num) =>{
//     console.log(num*num);
// });


//Some More Array Methods
// Map Fn
// Creates a new array with the result of some operation . 
// The value its callback returns are used to form new array

// Array.map(callbackFnx(Value,index, array))
// let newArr = arr.map((val) => {
//     return val * 2;
// });

// let nums = [10, 20, 30, 50];

// let newArr = nums.map((val) =>{
//     return val ** 2;
// });

// console.log(newArr);


// Filter* (create a new array of 
// elements that give true for a comdition / filter )

// let newArr = arr.filter((val)=>{

//     return val % 2 === 0;
// });

// let arr = [10, 11, 15, 20, 30, 18];

// let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
// });

// console.log(evenArr);


// Reduce*
//(performs some operations & 
// reduces the array to a single value. it returns that single value)


// let arr = [15, 40, 25, 30, 19];

// const output = arr.reduce((prev, curr) =>{
//     return prev + curr;
// });

// console.log(output);


// find largest*

// let arr = [15, 40, 25, 30, 19];

// const output = arr.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// });

// console.log(output);


//Q . we are given array of marks of students .
// filter out of the marks of students that scored 90


// let marks = [91, 90, 82, 95, 60, 94];

// let kitabikira = marks.filter((val)=>{
//     return val >= 90;
// });

// console.log(kitabikira);

let n = prompt("Enter number:");

let arr = [];

for( let i = 1; i <= n; i++);{
    arr[i - 1] = i;
}

console.log(arr);