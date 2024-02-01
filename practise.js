var person = {};
person.name = "John";
person.age = 30;

console.log(person);
const keys = Object.keys(person);
console.log(keys);

let str = "Mississippi";
console.log(str.indexOf("i", 3));

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let prop in myObject) {
    console.log(myObject[prop]);
  }

const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

const str = "Hello";
str[0] = "h";
console.log(str);


const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
};

console.log(colors["golden rod"]);

const car = {
  make: "Toyota",
  model: "Corolla",
  'passenger capacity': 5,
  year: 2020
};
console.log(car);
for(const prop in car){
  console.log(prop);
  console.log(car[prop]);
}

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
      subject: "HSC Physics",
      author: "Shahjahan Tapan",
      marks: 30
  }
};
console.log(student.physics.marks);


let myObject = {

  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true
  };
  for(const key in myObject){
    console.log('key :',key, '|', 'type :', typeof myObject[key]);
  }
  

