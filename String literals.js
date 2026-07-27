const name='Steven'; 
console.log(typeof name) ; 

const anotherName= new String('Joe'); 
console.log(typeof anotherName); 

let sentence= " A new sentence. " ; 
const doesIncludenew= sentence.includes('new'); 
console.log(doesIncludenew); 

console.log(sentence[1]);

const startsWithA= sentence.startsWith('A'); 
console.log(startsWithA); 

const startsWithB= sentence.startsWith('B'); 
console.log(startsWithB); 

const endsWithA= sentence.endsWith('A'); 
console.log(endsWithA); 

let updatedSentence= sentence.replace('new', 'short'); 
console.log(updatedSentence); 

// for trim method sentence should have space at beginning and the end.
const trimmedSentence= sentence.trim() ; 
console.log(trimmedSentence); 

const wordsInsentence= sentence.split();
console.log(wordsInsentence); 

let email= "TesTEmail@gmail.com" ; 
let lowerCaseemail= 
email.toLowerCase();  
console.log(lowerCaseemail) 
let upperCaseemail= email.toUpperCase(); 
console.log(upperCaseemail); 