const numbers= [5,4,3,2,1] ; 
numbers.push(7); 
numbers.push(7,8,9) ;
console.log(numbers); 
// numbers.push is used for adding numbere to behind of array.
// numbers.unshift is used for add numbers in front of array

numbers.unshift(67); 
console.log(numbers); 

numbers.splice(1,0,25,24) ;
// in numbers.splice first
// argument is the index
// then 2nd argument is the number id elements you wanna delete
// then write numbers you wanna add

console.log(numbers); 

// Finding numbers(Primitives)
// .indexof()
//.lastindexof()

let indexOf3= numbers.indexOf(3); 
console.log(indexOf3); 

let collection= ['bmw', 'alyx', 'jill', 'alyx']; 
let lastIndexofAlyx= collection.lastIndexOf('alyx') ; 
console.log(lastIndexofAlyx); 

// use lastIndexOf if you have duplicate value as it reads from left to right.
// if value not found in array it would display undefined 

// to avoid negative or undefined results we use if statements.

let indexOf10= numbers.lastIndexOf(10); 
if( indexOf10===-1) { console.log(" 10 is not found in the array");  } 
console.log(indexOf10); 

// we can also if statements with includes (number.includes)

if (numbers.includes(5)) { console.log("Found in the array") } 