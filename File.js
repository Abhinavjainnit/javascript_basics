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
