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

// SUBCLASSES

// MODULES
