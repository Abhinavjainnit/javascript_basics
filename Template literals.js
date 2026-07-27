let firstName='Steven'; 
let lastName='Garcia'; 
let fullName= firstName + ' ' + lastName; 
console.log(fullName); 

let Name= 'Abhinav';
let surname= 'Jain'; 
let schoolName= `${Name} ${surname}`; 
console.log(schoolName); 

// Object Literal
const developer = {
  name: "Abhinav",
  targetGoal: "December Escape Fund",
  status: "Building daily on phone"
};

// Template Literal
const logStatus = `Dev Profile: ${developer.name} | Goal: ${developer.targetGoal} | Current Mode: ${developer.status}`;

console.log(logStatus);
