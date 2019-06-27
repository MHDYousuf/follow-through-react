// CONST & LET

let name = "John";
name = "Bobby";
console.log(name);

const person = {
  name: "John",
  age: 30
};
person.name = "bobby";
console.log(person.name);

const num = [1, 2, 3, 4, 5];
num.push(6);
console.log(num);

// ARROW FUNCTIONS

const myfunction1 = name => console.log(`Hello ${name} from Arrow Function`);
myfunction1("Yousuf");

// FOREACH

const fruits = ["Apples", "Oranges", "Grapes"];
fruits.forEach((fruit, index) => console.log(fruit));

// MAP

const onefruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(onefruit);

// FILTER

const people = [
  { id: 1, name: "Yousuf" },
  { id: 2, name: "Vaishnav" },
  { id: 3, name: "Musammil" }
];

const people2 = people.filter(person => person.id != 1);
console.log(people2);

// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
const arr3 = [...arr.filter(num => num != 3)];
console.log(arr2);
console.log(arr3);

const person1 = {
  name: "Yousuf",
  age: 20
};
const Person2 = {
  ...person1,
  email: "mohd4yousuf@gmail.com"
};
console.log(Person2);

// DESTRUCTURING

const profile = {
  nameofperson: "Yousuf P U",
  address: {
    city: "changaramkulam",
    country: "India"
  },
  skills: "coding"
};

const { nameofperson, address, skills } = profile;
const { country } = profile.address;
console.log(nameofperson, address, skills);
console.log(country);

// CLASSES

class Person11 {
  constructor(name12, age) {
    this.name = name12;
    this.age = age;
  }
  welcome() {
    return `Hello, my name is ${this.name}`;
  }
}

const person12 = new Person11("Musammil", 20);
const person21 = new Person11("Yousuf P U", 21);
console.log(person12, person21);
console.log(person21.welcome());

// SUBCLASSES

class Customer extends Person11 {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}
const customer = new Customer("Vaishnav", 20, 1000);
console.log(customer);
console.log(customer.info());

// MODULES

//file 1 (file1.js)

/*export const name = "Jeff";
export const age = 20;
export default Person11;
*/

//file 2 (file2.js)

/*import {name, age} from './file1.js';
import Person from './file1.js';
*/
