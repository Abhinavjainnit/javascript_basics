let numbers=[1,2,3,4,5];
for (const elements of numbers) { console.log(elements);} 

const dog= { name: 'Max', age: 5, eyeColor: 'blue'} ;
// for ( const key in dog) {console.log(dog[key])} ; 
const values=Object.values(dog);
console.log(values);

for (const value of Object.values(dog)) {console.log(value) } ;