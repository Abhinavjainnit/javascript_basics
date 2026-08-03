let numbers = [1,2,3,4,5] ;
// first way is to use while loop(not // for very big arrays)
// while (numbers.length>0) 
 // numbers.pop(); 
 // or just use number.length
// numbers.length= 0
 // console.log(numbers) ; 
 // or use splice method.
 const deletedNumbers= numbers.splice(0,numbers.length); 
 console.log(`deletedNumbers${deletedNumbers}`) ; 
 