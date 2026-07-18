let hour=10;
if (hour<=2&&hour<3) console.log("serving breakfast");
else if (hour===10) console.log("serving tea");
else console.log("closed");

let job="designer";
if (job==="software developer")  console.log("writes code"); else if (job==="designer") console.log("makes clothes"); 
else if (job==="cloud engineer") console.log("makes clouds work");

switch (job){ case
"software developer": console.log("writes code"); break;
case "designer": console.log("makes clothes"); break;
case "cloud engineer": console.log("makes clouds work"); break;
default:console.log("works directly with constomers");};

let person="Abhinav";
switch (person) { case "Abhinav": console.log("Legend");break; case "Alyx": console.log("white"); break; case "Elisa": console.log("black"); break ; 
default : console.log("anyone");}

let numbers=[1,2,3,4,5,6,7];
let idx=0;
let lengthOfarray=numbers.length;
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx]);

for (idx=0; idx<numbers.length; idx++) {console.log(numbers[idx]);} ;


