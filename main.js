// Use variable: let (can be reassign its value) ,  (can't be reassign its value)
// Primitive data: String, Numbers, Boolean, null, undefined
/*
const name = "John"; // string
const age = 30; // numbers
const rating = 4.5; // it's decimal but (there's no technical float or decimal data type in JS)
const isCool = true; // boolean
const x = null; // empty
const y = undefined; // explicitly define undefined
let z; // this would be undefined as well

console.log(typeof rating); // to test (typeof) what type its variable
*/

/*
const name = "John";
const age = 30;

// Concatenation aka the OLD WAYS
console.log("My name is " + name + " and I am " + age);

// Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);
*/

/*
const s = "Hello World";

console.log(s.length); // property doesnt have parenthesis (eg. length)
console.log(s.toUpperCase()); // method has parenthesis (eg. toUpperCase(), substring() ) , method is a function that's associated with an object
console.log(s.toLowerCase()); // -- * --
console.log(s.substring(0, 5)); // to pull a substring out of the string , 2 index (start, end) (eg. 0,5 (start at 0, end BEFORE 5) )
console.log(s.substring(0, 5).toUpperCase()); // chaining method
*/

/*
const s = "technology, computers, IT, code";

console.log(s.split(', ')); // split a string into an array , ('') is a parameter that takes what it want to split by (EXCLUDE what it won't to take)
*/

// Arrays = variables that hold multiple values

// This is an OLD WAYS
/*
const numbers = new Array(1,2,3,4,5); // new is a constructor (eg. constructing an array)
/*
// Should be like this
/*
const fruits = ['apples', 'oranges', 'pears']; // JS can have multiple data types in Arrays

console.log(fruits[2]); // this is how to access Arrays with [] (brackets with value)
*/
/*
console.log(fruits);

// This is an OLD WAYS to ADD ON Arrays
fruits[3] = 'grapes';

// Should be like this
fruits.push('mangos'); // .push to add to the END of Arrays

fruits.unshift('strawberries'); // .unshift to add to the START of Arrays

fruits.pop(); // to remove/delete/take the END of Arrays values

fruits.shift(); // to remove/delete/take the START of Arrays values
*/

// Object Literals = key value pairs
/*
const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: { // this is an object inside/embedded in an object
		street: '50 main st',
		city: 'Boston',
		state: 'MA'
	}
}

console.log(person.firstName); // this is how to access object properties values with . (dot) syntax
console.log(person.hobbies[1]); // this is how to access array values inside an object
console.log(person.address.city); // this is how to access an object inside an object
console.log(person.firstName, person.lastName); // this is how to log more than one properties values with , (comma)

// desctructuring to create variables from object properties
const { firstName, lastName, address: { city }} = person; // pulling out firstName, lastName, city from address object, all of this from person object

console.log(firstName, city);

person.email = 'john@gmail.com'; // add properties to an object

console.log(person);
*/

const todos = [ // arrays of object (object in arrays)
{
	id: 1,
	text: 'Take out trash',
	isCompleted: true
},
{
	id: 2,
	text: 'Meeting with boss',
	isCompleted: true
},
{
	id: 3,
	text: 'Dental appointment',
	isCompleted: false
}
];
/*
console.log(todos);
console.log(todos[1].text); // this is how to access object properties values in an arrays

// JSON = data format , using API to send/receive to/from a server in JSON format
const todoJSON = JSON.stringify(todos); // this is a method (stringify) convert object literals to JSON format data
console.log(todoJSON);
*/

// For loops
/*
for(let i = 0; i < 10; i++) { // for loops start/print out from 0 (i = 0) then did an iteration (i++) then stop at 9 when the condition is false (because 10 is MUST i < 10)
//	console.log(i);
	console.log(`For loops number is ${i}`);
}
*/

// While loops
/*
let i = 0; // the different from for loops is set the variable outside of the loops
while(i < 10) {
	console.log(`while loops number is ${i}`);
	i++;
}
*/
/*
for(let i = 0; i < todos.length; i++) { // this is not the best way to loops through an array
	console.log(todos[i].text); // i length aka todos length is 3, so it will print out all todos with properties text (in order of the index, 0,1,2, 3=false(i < 3)
}

for(let todo of todos) { // this is same as before with much better readable code
	console.log(todo.text);
}
*/
// High order array methods (suggest use it todo any kind of iteration/loops with arrays)

// forEach (loops through inside of array), map (create new array from an array), filter (create new array based on a condition)
/*
todos.forEach(function(todo) { // forEach take in as parameter a function (function(), callback function takes in is todo, todo is a variable as each item in array
	console.log(todo.text);
});
*/
/*
const todoText = todos.map(function(todo) { // loop through then return an array of just the text values
	return todo.text; // takes the text values to the todoText variable and makes it an array
});

console.log(todoText);
*/

const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true; // it's just takes the object that has properties true / the condition is true
});

console.log(todoCompleted);











