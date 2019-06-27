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

function myfunction() {
  //Regular Function
  console.log("Hello World");
}

myfunction();

//Arrow Function
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

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
