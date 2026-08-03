// This method is used to filter elements of an array that meet a{ specific condition & create a new array for the chosen elements.
const numbers= [1,2,3,4,5,6];
const evenNumbers= numbers.filter(number=> number%2===0 ); 
console.log(evenNumbers); 

const employees= [ 
  {name: 'Alice', id:1, role: 'developer' }, 
    {name: 'Alyx', id:2, role: 'gamer' }, 
{ name: 'Alisa', id:3, role: 'coder' }, 
  {name: 'Ayue', id:4, role: 'giant' } ] 
  const developer= employees.filter( employee=> employee.role=== 'developer'); 
  console.log(developer); 