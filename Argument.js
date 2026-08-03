// function multiply(num1,num2) { console.log(arguments); 
  // return num1*num2 }
  
  // console.log( multiply(2,4)); 
  // if we don't apply second  argument it shows not a Number
  // we can even passmore arguments than parameters defined
  // we can also use for off loops etc in our arguments.
  function multiply(num1,num2) { 
    let product=1; 
    for ( const num of arguments) 
    product*= num; 
    
    return product; 
  } 
    console.log(multiply(6,7,6)) 
    
let course = { 
  name: "Javascript for beginners", 
  duration: " 3 hrs" } ; 

let newCourse = {...course}; 
console.log(newCourse); 

function multiply{...args} {
  return args.reduce((accumulator, currentValue)=> accumulator* ) 
}

function multiply(multiplier,...numbers) { 
  return numbers.map(number => number* multiplier) ; } 
  console.log(multiply())