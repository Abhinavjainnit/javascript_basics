const Dog= { name: 'Max', 
breed: 'Dashchund', 
age: 5,
weightinpounds: 12,
eat: function() {console.log('chomp!');}, 
bark () {console.log('woof');} 
}



function getDog(name, breed, age, weightinpounds) {
  return { name: name,
  breed: breed,
  age: age,
  weightinpounds: weightinpounds, 
  eat:  function() {console.log("chomp!");},
  bark() {console.log("Woof!"); }
} }

const anotherDog= getdog('Marley','Chocolate Lab', 3, 60); 

console.log(anotherDog);

function Dog(name,breed,age,weightinpounds) { 
  this.name= name;
  this.breed= breed;
  this.age= age;
  this.weightinpounds= weightinpounds; 
  this.eat= function() {console.log("chomp!");} ;
  this.bark= function() {console.log("Woof!");} ;
}

const anotherDog = new Dog('Marley', 'Chocolate Lab',3,60 );
console.log(anotherDog);

  
