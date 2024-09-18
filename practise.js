// console.log("hello....");

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:

// console.log(cars);
cars[0] = "Toyota";

// console.log(cars)

cars.push("honda city");

// console.log(cars);

// cars.pop("honda city");
// console.log(cars)

// console.log(typeof(cars));

let x = myFunction(4, 3);

function myFunction(a, b) {
  return a + b;
}

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
// console.log(person);

person.nickName = "Prime";

// console.log(person.address.city);

// console.log(person)

delete person.age;

// console.log(person)

const text = "ARYAN RANA";
console.log(text);

// console.log(text.charAt(0)); //to see thee first char

// console.log(text.slice(2, 7));

const objectEntries = Object.entries(person);

// console.log(objectEntries);

Object.defineProperty(person, "year", { value: "2024" });
person.number = "9192525252"

// console.log("Year is :- ", person.year);
// console.log(person)



function countAdd(number1,number2){
  return number1 + number2
}

console.log(countAdd("f","x"))





// test//

const jti = randomBytes(32).toString("hex");

console.log("jti",jti);