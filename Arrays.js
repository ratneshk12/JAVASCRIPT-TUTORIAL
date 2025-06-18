// Arrays (collections of item)

// let marks = [10, 12, 24, 28];
// console.log(marks);

// // array indices
// arr[0], arr[2], arr[3]

//strings are immutable
// array are mutable

// Looping over an Array(prints all elements of an array)

// loops  -> iterable (strings, object , arrays)


//for loop
// let mark = [20,25,28,12,10,19];

// for (let idx = 0; idx<mark.length; idx++){
//     console.log(mark[idx]);
// }


//practice 1
// for a given array with marks of students ->[25,20 ,15, 20 , 30].
// find the average marks of the entire class.

// let marks = [25, 20, 15, 20 , 30];

// let sum = 0;

// for (let val of marks){
//     sum += val;
// }
// let avg = sum /marks.length;
// console.log(`avg marks of the class = ${avg}`);


//practice 2
//for a given with prices of 5 item->[22, 64, 30, 90, 50].
//all items have an offer of 10% off on them . change the array
//  to store final prices after applying offer

// let item = [22, 64, 30, 90, 50];

// // let i = 0;

// // for (let val of item){
// //     console.log(`value at index ${i} = ${val}`);
// //     let offer = val / 10;
// //     item[i] = item [i] - offer;
// //      console.log(`value after offer = ${item[i]}`);
// //      i++;
// // }


// for(i = 0; i < item.length; i++){
//     let offer = item[i]/10;
//     item[i] -= offer;
// }
// console.log(item);


// Array Methods

//push (): add to end
//pop(): delete from end & return
//tostring(): converts array to string

// push example

// let foodItems =["litchi","apple","kathal", "jalebi" ];

// foodItems.push("mango", "samose");
// console.log(foodItems);

// pop example


//  let foodItems =["litchi","apple","kathal", "jalebi" ];
 
//  foodItems.pop("jalebi");
//  console.log(foodItems);

 let foodItems =["litchi","apple","kathal", "jalebi" ];
 console.log(foodItems);
 console.log(foodItems.toString());