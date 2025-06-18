// Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”
// ,“Google”,“IBM”,“Netflix”

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end


//(A) 
// 
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift("Bloomberg");
// console.log(companies);

//(B) 
// 
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(2,1,"ola");
// console.log(companies);

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.push("Amazon");
console.log(companies);