const employees= { {
  id: 1,
  name: 'Jim'
}, 
{
  id: 2,
  name: 'Jill'
}, 
{
  id: 3,
  name: 'Jack'
} }
 // we use find method here.
 
 const employee= employees.find(function(e) { return e.name === 'Jim'} ) 
 // we use an anonymous 
 // function(e) here and give it a command in the codeblock to return if the value exists it will return, othewise undefined
 // or use arrow notation.
 const add= (num1, num2)=> { return num1 + num2 } 
 // we can use this arrow notatiob for callback functions.
 
 const country= { 
   { name: 'Germany',
   youthsummit: 'YAS' } ,
   { name: 'Norway',
   youthsummit: 'IFSIT' } } ; 
   
 const findcountry= country.find((e) => e.name=== 'Germany') ;
 console.log(findcountry) 
   
   
