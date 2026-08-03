function add(num1,num2) { 
  return num1+num2 } 
  // this function is actually an Object.;
  const n=add ;
  // we can reference functions also
  
  console.log(add(27,56)); 
  console.log(add.length);
  // we can apply object properties on function⁰p
  // function programmer(name) {
    // this.name= name
   // this.writeCode= function() { console.log("Code in Javascript") }
  
  
  //console.log(programmer.length) ;
  //console.log(programmer.constructor) ; 
  function Programmer(name) {
  this.name = name;
  this.writeCode = function() {
    console.log("Code in Javascript");
  };
}

  
  
  let a={ value:10} ;
  let b=a;
  
   a.value=29;
  console.log(a);