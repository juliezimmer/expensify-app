// ************  OBJECT DESTRUCTURING ************ //
console.log ("****** OBJECT DESTRUCTURING ******");

const person = {
   name: "Julie",
   age: 30,
   location: {
      city: "Minneapolis",
      temp: -15
   }  
};

// Object Destructuring
const { name, age } = person; 
// this (above) has the same meaning as the two lines of code below: 
   // const name = person.name;
   // const age = person.age;
// The properties that are destructured will, by default, have the same variable name as the property from which they were destructured.
console.log(`${name} is ${age}.`); // Julie is 30.

// Renaming the property after it is destructured requires the renaming syntax  used in the destructured object below": 'property: new var name'
// When destructuring a property that has an object as its value, the object on the right hand side of the equation will be 'primary object.property with object value' like the example below: 
// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//    console.log(`It's ${temperature} in ${city}.`); // It's -15 in Minneapolis.
// }

// Challenge
// const book = {
//    title: "Ego is the Enemy",
//    author: "Ryan Holiday",
//    publisher: {
//       name: "Penguin"
//    }
// }

// const {name: publisherName = 'self-published'} = book.publisher;
// Log this to the console:
// add a default value for publisher name of self-published
// console.log(`${publisherName}`);

// ************ ARRAY DESTRUCTURING ************ //
console.log ("****** ARRAY DESTRUCTURING ******");

// create an array, address, which is an array of strings.
// Each string in the array is a part of a complete address. 
const address = ["949 Jefferson Lane", "Duluth", "Michigan", "58012"];

// const [street, city, state, zip] = address; 
// const [ , city, state] = address;
// const [, , state] = address; 
const [, city, state = "New York"] = address;
console.log (`You are in ${city}, ${state}.`);

// setting default values
// const address1 = [];
// const [, , state = "New York"] = address1;
// console.log(`You are in ${state}.`);

// Challenge

const item = ["coffee", "$2.00", "$2.50", "$2.75"];
// 1st and 3rd items
const [beverage, , medium] = item;
console.log(`A medium ${beverage} costs ${medium}.`);

const item1 = ["iced coffee", "$3.00", "$3.50", "$4.00"];
const [coldBeverage, , , large] = item1;
console.log(`A large ${coldBeverage} costs ${large}.`);