let a= { value:10 } ;
let b= {...a};

// Object.assign(b,a); (same result as Object.assign(b,a) )
 b.value= 20; 
console.log(a);
console.log(b) ; 

console.log(Math.round(8.6)); 
console.log(Math.pow(3, 6)); 
console.log(Math.sqrt(4.5)); 
console.log(Math.random()); 

let max= 10;
let min= 1; 

let randomNum = Math.random()*(max-min)+ min ; 
console.log (randomNum); 

let randomNumber = Math.round(Math.random()*(max%min)*(min+max)); 
console.log(randomNumber) ; 

