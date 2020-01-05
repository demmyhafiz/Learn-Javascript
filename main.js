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
/*
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
*/
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
/*
const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true; // it's just takes the object that has properties true / the condition is true
}).map(function(todo) { // chaining with other methods
	return todo.text; // so it's output that isCompleted is true, then take only text values from it
});

console.log(todoCompleted);
*/

// If conditionals

const x = 10;
const y = 11;
/*
if(x === 10) {
	console.log('x is 10');
} else if(x > 10) {
	console.log('x is greater than 10');
} else {
	console.log('x is less than 10');
}
*/
/*
if(x > 5 || y > 10) { // it should be x MORE than 5 OR y MORE than 10, ONE of them has to be TRUE
	console.log('x is more than 5 or y is more than 10');
}
if(x > 5 && y > 10) { // this should be x MORE than 5 AND y MORE than 10, BOTH of them hs to be TRUE
	console.log('X is more than 5 or y is more than 10');
}
*/
/*
const color = x > 10 ? 'red' : 'blue'; // ? is "THEN if it's TRUE", : is "ELSE if it's FALSE"
console.log(color);

switch(color) { // IF the color result is red, blue, or not both
	case 'red': // IF it's red
		console.log('color is red');
		break;
	case 'blue': // IF it's blue
		console.log('color is blue');
		break;
	default: // aka ELSE, if the color result is not both of them
		console.log('color is NOT red or blue');
		break;
}
*/

/*
function addNums(num1, num2) { // this is a function
	return num1 + num2;
}

console.log(addNums(5,5));
*/
/*
const addNums = (num1, num2) => num1 + num2; // convert it into arrow function

console.log(addNums(6,6));
*/

// Object oriented
// Constructor function
/*
function Person(firstName, lastName, dob) { // Person is object (constructor function), set parameter to pass in the properties it want to be able to set
	this.firstName = firstName; // when the parameter has been passed in, set it to properties of the object (with this.)
	this.lastName = lastName;
	this.dob = new Date(dob); // turn in to date object using date constructor
	/*
	this.getBirthYear = function() { // create a method to show the full year of birth
		return this.dob.getFullYear();
	}
	this.getFullName = function() { // create a method to show the full name
		return `${this.firstName} ${this.lastName}`;
	}
	*/
	/*
}

Person.prototype.getBirthYear = function() { // this is a better way to create a method function with prototype object
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
}
*/

// Class
/*
class Person { // this does the same thing just like the above syntax (BETTER WAY)
	constructor(firstName, lastName, dob) { // create a constructor method (function inside of a class)
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}
	getBirthYear() { // add a method want to use in this parenthesis
		return this.dob.getFullYear();
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}


// Instantiate object
const person1 = new Person('John','Doe','4-3-1980'); // person1 set it to Person object (with new) 
const person2 = new Person('Mary','Smith','3-6-1970');

console.log(person1);
console.log(person2);
console.log(person2.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

// DOM (Document Object Model) / User Interface
// Single element selector
/*
console.log(document.getElementById('my-form')); // get 1 element by the ID
console.log(document.querySelector('h1')); // to get other elemets/things than by the ID
*/

// Multiple element selector
/*
console.log(document.querySelectorAll('.item')); // ALWAYS use these 3 element selector (BETTER WAY)
*/

// how to take the items then get it all/output it all of them
/*
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item)); // loops through item class then get/output each of them
*/

// Manipulating DOM element
/*
const ul = document.querySelector('.items'); // assign the item class into the ul variable, so it can be manipulated

ul.remove(); // the remove method is to remove the class items
ul.lastElementChild.remove(); // the lastElementChild selector used to remove the last element of items class
ul.firstElementChild.textContent = 'Hello'; // to change the text/value of the firstElementChild aka first <li> tags
ul.children[1].innerText = 'Brad'; // but if the element is in the middle of the itmes children, use children[] (with index to selecting) then change the text/value with innerText
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // to change the tags element dynamically with innerHTML 
*/

// Manipulating style CSS
/*
const btn = document.querySelector('.btn');
btn.style.background = 'red'; // change the background color of btn class

btn.addEventListener('click', (e) => { // create event listener, the first is the EVENT, 'click' event is WHEN the element is CLICK-ed, second is FUNCTION, (e) is tkaes in an event parameters what happens when it's CLICK-ed
	e.preventDefault();
	// console.log(e);
	
	document.querySelector('#my-form').style.background = '#ccc'; // change background body
	document.querySelector('body').classList.add('bg-dark'); // add class to the style of the element
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'; // change html tags
	
	});
*/




















