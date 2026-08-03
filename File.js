const object = [a=1, b=2, c=3, d=4];
for (let key in object) { if (object[key]%2===0) { 
  continue;
}
console.log(object[key]); } 

const arr=[1,2,3,4,5];
for (let element of arr) { if (element%2===0) {
  continue;
} console.log(element);  } 

function MaxNum(num1,num2) { return num1>=num2? num1: num2; }
console.log(MaxNum(2,4)); 

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


let cat= { Name: "Kitty", Age: 3, Color: "black", Breed: "Indian"} 
function createcat(Name,Age,Color,Breed) { return { Name: Name, 
Age: Age, Color : Color, Breed: Breed } }
console.log(createcat("Kitty",3,"black",
"Indian")) ;

