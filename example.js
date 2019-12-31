/* freeCodeCamp material */

/* Data type:
undefined (something that has not been defined. eg. var foo;)
null (nothing. eg. var foo = null)
boolean (true / false. eg. var foo = true)
string (a sentence. eg. var foo = "Hi!")
symbol (immutable primitive value that is unique. eg var foo = Symbol();)
number/integer (is number)
object (can store a lot different key value pairs. eg. )
*/

var myName = "Demmy"; /* var used by whole program */
let yourName = "Hafiz"; /* let used within the scope of where its declare. doesnt let it declare/assign a variable value twice */
const ourName = "Janitra"; /* used for variable that never changed (permanent) */
/* "use strict" is used to enable strict mode which catch common coding mistakes and unsafe actions. use it at the top of javascript file or just in the function */
var a; /* declare a variable */
var b = 1; /* assign a value to variable */
			/* var b is declaring a variable, then 1 initialize it to variable */
var c = 10 + 10; /* adding numbers */
var d = 10 - 5; /* subtracting numbers */
var c = 10 * 10; /* multiplying numbers */
var e = 10 / 5; /* dividing numbers */
c = c + 1; /* incrementing number */
c++; /* is equal to c = c + 1; */
d = d - 1; /* decrementing number */
d--; /* is equal to d = d - 1; */

var ourDecimal = 5.7 * 3.3; /* declare/assign/arithmetic a decimal value to variable */

var remainder;
remainder = 11 % 3; /* is a remainder. eg. decrement by 3 = 11(1) 10(2) 9(3) (take the last 3) = 11 - 9 = 2 */

var aa = 3;
var bb = 17;
var cc = 12;

aa = aa + 12;
aa += 12; /* this is like a shortcut, ame as aa (aa is 3) = aa (3) + 12; */
bb = 9 + bb;
bb += 9;
cc = cc + 7;
cc += 7;

aa = aa - 12;
aa -= 12; /* is same as aa (aa is 3) = aa (3) - 12; */
bb = 9 - bb;
bb -= 9;
cc = cc - 7;
cc -= 7;
/* the pattern is same as before ( *=, /= ) */

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
/* escaping literal quotes in strings */

var myStr = '<a href="http://freecodecamp.com" target="_blank">Link</a>';
/* using '' for double quotes in a tag html for link */

/*****
Code   Output
\'     single quote
\"     double quote
\\     backslash
\n     newline
\r     carriage return
\t     tab
\b     backspace
\f     form feed
*****/
/*escaping sequences in strings */

var ourStr = "I come first. " + "I come last.";
/* concatenate a strings */

var ourStr = "I come first. ";
ourStr += "I come last.";
/* shortcut for concatenate a strings */

var myName = "Demmy";
var myStr = "My name is " + myName + " and I am good!";
/* constructing strings with variable */

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective; /* is same as myStr = myStr + someAdjective; */
/* appending variables to strings */

var lastNameLength = 0; /*declare as a number/integer variable */
var lastName = "Lovelace";

lastNameLength = lastName.length;
/* find length in a string, count from 1 index */

lastNameLength = lastName[1];
/* bracket notation to find first or nth character in string */

lastNameLength = lastName[lastName.length - 2];
/* bracket notation to find last char, second last char, etc. character in string */
/* is same as length of Lovelace is 8, 8 - 1 = 7, take the first 7 char,
and what is left? "e" */
/*console.log(lastNameLength);*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = ""; /* assigning empty string to result variable */
		result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
	return result;
}
/* practice with strings learned before */

/*console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));*/

var myArray = ["Demmy", 10];
/* store multiple values (all data type) with arrays */
var ourArray = [["Bulls", 23], ["White fox", 45]];
/* nested array / multidimensional array */

var yourArray = [50,60,70];
var yourData = yourArray[1];
/* access array data with indexes, count from 0 index */

yourArray[1] = 45;
/* modify array data with indexes */

var hisArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var herData = hisArray[2][1];
/* access multidimensional arrays with indexes, count from 0 index */

var aaArray = [["John", 23], ["Cat", 2]];
aaArray.push(["Dog", 3]);
/* manipulate arrays with push() (add new array to the end of array) */

aaArray.pop();
/* manipulate array with pop() (delete array from the last of array) */

aaArray.shift();
/* manipulate array with shift() (delete array from the first of array) */

aaArray.unshift(["Paul", 35]);
/* manipulate array with unshift() (add new array to the first of array) */

/*console.log(aaArray);*/

var myList = [["cereal", 3], ["milk", 2], ["banana", 3], ["juice", 2], ["eggs", 5]];
var yourList = myList[0]; /* access the first array and initialize it to yourList variable */
/* practice shopping list with array, nested/multidimensional array before */
myList [0][1] = 5; /* change the first array, second value, with 5 */
myList.push(["tomato", 4], ["potato", 6]); /* add 2 new array to the end of array */
myList.unshift(["xxx"], [["Shopping list"]]); /* add 2 new array to the first of array */
myList.shift(); /* delete the first array ["xxx"] */
myList.pop(); /* delete the last array ["potato", 6] */

/*console.log(myList);*/


function reusableFunction() { /*a function used to create reusable code */
	console.log("Hi World!");
}
/*
reusableFunction(); /* called/invoked the function to output Hi World! */

function functionWithArgs(a, b) { 
	console.log(a + b);
}
/* parameters are variables that act as placeholder for the values that are to be input/pass
to a function when it is called */

/*
functionWithArgs(10, 5);
/* called the function and pass/input data (in parentheses) into the function parameters. eg. a=10, b=5 */

var myGlobal = 10; 
/* scope refers to the visibility of variables
which are defined outside of a function block have global scope */
/* global scope means it can be seen/accessed everywhere in js file */

function fun1() {
	var oopsGlobal = 5; 
}
/* this is a local variable, it means it just can be accessed by this function only */
/* but if the variable in it didnt use var keyword, it becomes global scope automatically */

function fun2() {
	var output = ""; /* it's local variable, it declare output variable and assign empty string value */
	if (typeof myGlobal != "undefined") { 
		output += "myGlobal: " + myGlobal;
	}
	/* variable myGlobal could be accessed inside this function */
	
	if (typeof oopsGlobal != "undefined") { 
		output += " oopsGlobal: " + oopsGlobal;
	}
	/* variable oopsGlobal could not be accessed inside this function */
	
	console.log(output);
	}
/*
fun1();
fun2(); */

function myLocalScope() {
	var myVar = 5; /* declare myVar variable inside this function */
	console.log(myVar); /* access myVar variable within this function */
}
/*myLocalScope(); /* called/invoked the function outside */
/*console.log(myVar); /* it cant be called/invoked the variable within myLocalScope function */

var outerWear = "T-shirt"; /* declare global variable */

function myOutfit() {
	var outerWear = "sweater"; /* if there is a variable with same name as global declare here, it took precedence over global variable value */
	/* but if there isnt variable declare with same name as global in this function, its gonna take the value of global variable */
	return outerWear; /* called/invoked the global/local variable */
}
/*
console.log(myOutfit());
console.log(outerWear); */

function minusSeven(num) { /* create paramater num as placeholder/empty variable that could be input/pass a value by the caller */
	return num - 7; /* the return statement means the paramater can be used/input by a value in this function */
}
/*
console.log(minusSeven(10)); /* pass a 10 value into num parameter inside the function. eg. minusSeven = num - 7 / (10) - 7; */

var sum = 2;
function addThree(xam) {
	sum += 3; /* if it's just create arithmetic like this without return statement. it will output undefined */
	return sum; /* but if we called the sum with return statement, the result that given by arithmetic operation will be passed into the function */
}
/*
console.log(addThree()); */

var changed = 0;

function change(num) {
	return (num + 5) / 3; /* the return make arithmetic operation, and pass the result into the function */
}
changed = change(10); /* assign the change function result of arithmetic operation into changed variable */
/*
console.log(changed); /* now changed variable equal as change function result */

var testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) { /* create arr and item placeholder */
	arr.push(item); /* add 6 to the end of testArr (because arr = testArr */ 
	/* arr equal to testArr array value */
	return arr.shift(); /* remove and take the first value of arr array (arr = testArr) */

}
/*
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); /* output 1. because nextInLine function return the result of arr.shift() = 1 */
/* console.log("After: " + JSON.stringify(testArr));
/* output [2, 3, 4, 5, 6]. because now testArr remove 1 before inside the function, arr.push() is inserted into testArr array after that */

function welcomeToBooleans() {
	return true; /* or fales, its gonna pass into the function */
}
/*
console.log(welcomeToBooleans()); */

function trueOrFalse(isThatTrue) { /* create a placeholder isThatTrue */
	if (isThatTrue) { /* use the placeholder here in order to get the result from the first return statement */
		return "Yes, it is true"; /* got executed if passed by true */
	}
	return "No, it is false"; /* got executed if passed by false */
}
/*
console.log(trueOrFalse(true)); /* pass boolean, and output the string */
/* pass the true/false value into isThatTrue parameter/placeholder */

function testEqual(val) {
	if (val == 12) { /* check if val (passed by 10) is equal to 12 */
		return "Equal"; /* if it is true */
	}
	return "Not equal"; /* it is not */
}
/*
console.log(testEqual(10)); /* pass the integer, and output the string */

function testStrict(val) {
	if (val === 7) { /* strict equality, if its integer, the value passed into the paramater should be integer */
		return "Equal";
	}
	return "Not equal";
}
/*
console.log(testStrict("7")); */

function compareEquality(a, b) {
	if (a === b) { /* if its used == equality, the second comparison would be converted into the first comparison value */
		return "Equal";
	}
	return "Not Equal";
}
/* but if its used === equality, it strict */
/* console.log(compareEquality(10, "10")); /* pass 10 to a, "10" to be parameter/placeholder */

function testNotEqual(val) {
	if (val != 99) { /* it means if val NOT EQUAL to 99 aka beside 99, would return Not Equal, if equal aka 99 return Equal */
		return "Not equal";
	}
	return "Equal";
}
/*
console.log(testNotEqual("99")); */

function  testStrictNotEqual(val) {
	if (val !== 17) {
		return "Not equal";
	}
	return "Equal";
}
/*
console.log(testStrictNotEqual("17")); */

function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}
if (val > 10) {
	return "Over 10";
}
return "10 or Under"; /* return this when paramater passed value is not 100 or 10 */
}
/*
console.log(testGreaterThan(10)); */

function testGreaterOrEqual(val) {
	if (val >= 20) { /* if val value is greater or equal to 20 */
		return "20 or Over";
	}
	if (val >= 10) {
		return "10 or Over";
	}
	return "Less than 10"; /* beside 20 10 value */
}
/*
console.log(testGreaterOrEqual(9)); */

function testLessThan(val) {
	if (val < 25) {
		return "Under 25";
	}
	if (val < 55) {
		return "Under 55";
	}
	return "55 or Over"; /* beside under 55 and 25 value */
}
/*
console.log(testLessThan(55)); */

function testLessOrEqual(val) {
	if (val <= 12) {
		return "Under or Equal 12";
	}
	if (val <= 24) {
		return "Under or Equal 24";
	}
	return "25 or Over"; /* beside under 24 and 12 value */
}
/*
console.log(testLessOrEqual(25)); */

function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) { /* if val is less AND greater than EQUAL to 50 AND 25 */
		return "Yes";
	}
	return "No"; /* beside under 50 and over 25 */
}
/*
console.log(testLogicalAnd(25)); */

function testLogicalOr(val) {
	if (val < 10 || val > 20) { /* if val UNDER 10 OR OVER 20 */
		return "Outside"; /* 0-10, 21-99 */
	}
	return "Inside"; /* return this if val 10-20 (11-19) */
}
/*
console.log(testLogicalOr(10)); */

function testElse(val) {
	var result = ""; /* create empty string variable for the result of if-else statement */
	
	if (val > 5) { /* val is placeholder for input */
		result = "Bigger than 5"; /* result variable would gonna be the testElse function RESULT when its called */
	} else { /* beside bigger than 5 */
		result = "5 or Smaller";
	}
	
	return result; /* return/pass the result/value of if-else statement in result variable to testElse function */
}
/*
console.log(testElse(4)); */

function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) { /* is same is AND IF val is less than 5 */
		return "Smaller than 5";
	} else {
		return "Between 5 and 10"; /* beside under 5 and over 10 */
	}
}
/*
console.log(testElseIf(7)); */

function orderMyLogic(val) {
	if (val < 5) { 
		return "Less than 5";
	} 
/* if it is gonna used else if statement, the order of if condition should be from the lowest to the highest */
/* because if the highest if statement in the first order, and if its true, its not gonna check to the next order if statement */
	else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
}
}
/*
console.log(orderMyLogic(3)); */

function testSize(num) { /* nested/chaining if and else-if statement value in order from low to high */
	if (num < 5) { /* less than 5 (4-0) */
		return "Tiny";
	} else if (num < 10) { /* less than 10 (9-5) */
		return "Small";
	} else if (num < 15) { /* less than 15 (14-10) */
		return "Medium";
	} else if (num < 20) { /* less than 20 (19-15) */
		return "Large";
	} else {
		return "Huge"; /* more than 20 (20-99) */
}
}
/*
console.log(testSize(6)); */

/* practice with if, else-if, else statement */
/*
If:
Strokes		Return
1			"Hole-in-One!"
<= par -2	"Eagle"
par - 1 	"Birdie"
par 		"Par"
par + 1		"Bogey"
par + 2		"Double Bogey"
>= par + 3	"Go Home!"
else		"Wrong Input"
*/

var names = ["Hole-in-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!", "Wrong Input"];

function golfScore(strokes, par) { /* create strokes and par placeholder/parameter for input/passing by value */
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1]; /* return "Eagle" */
	} else if (strokes == par - 1) {
		return names[2]; 
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5]; /* return Double Bogey" */
	} else if (strokes >= par + 3) {
		return names[6];
	} else { /* beside input by 1 and (strokes, val) parameter value */
		return names[7];
}
}
/*
console.log(golfScore(2)); */


function caseInSwitch(val) {
	var answer = "";
	switch(val) { /* switch-case is same as if-else if statement */
		case 1:
			answer = "alpha";
			break; /* used to break/stop if the value that passed by the paramater/placeholder is match with the switch case condition */
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
		default: /* default is same as else in if statement */
			answer = "wrong input";
			break;
	}
	return answer;
}
/*
console.log(caseInSwitch(2)); */

function sequentialSizes(val) {
	var answer = "";
	switch(val) {
		case 1: /* used for 3 case/if statement with same result, it's just gonna go through the case till met break; */
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Medium";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}
	return answer;
}
/*
console.log(sequentialSizes(9)); */

function chainToSwitch(val) {
	var answer = "";
	
	switch(val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much";
			break;
		case 7:
			answer = "Ate nine";
			break;
	}
	return answer;
}
/*
console.log(chainToSwitch(7)); */

function isLess(a, b) {
	return a < b;
/* is same as if-else statement. eg. if (a < b) { return true; } else { return false; } */
}
/*
console.log(isLess(10, 15)); */

function abTest(a, b) {
	
	if (a < 0 || b < 0) {
		return undefined; /* returning early pattern from functions. if the value passed by the parameter a or b is 0 or less (minus), executed undefined */
	}

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
/*
console.log(abTest(-5, 5)); */

var count = 0;

function ac(card) {
	switch(card) {
		case 2: /* if value passed by param is 2, 3, 4, 5, 6 would be incremented to the count variable by 1 (1 times) */
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10: /* if value passed by param is 10, J, Q, K, A would be decremented to the count variable by 1 (1 times) */
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
	}
	
	var holdbet = "Hold"; /* if the count result is 0 or less, then return Hold */
	if (count > 0) {
		holdbet = "Bet"; /* if the result of count variable is more than 0, return Bet */
	}
	
	return count + " " + holdbet;
		
}

ac(2); ac(3); ac(7); ac("K"); ac("A");
/* passed ac by 2 (count is 0, now 0 + 1 = 1), then passed ac by 3 (count is 1, now 1 + 1 = 2,
then passed ac by 7 (7 is not in the case, so nothing will be increment/decrement the count variable,
then passed ac by "K" (count is 2, now 2 - 1 = 1), then passed ac by "A" (count is 1, now 1 - 1 = 0),
then last passed by ac by 4 (count is 0, now 0 + 1 = 1), the last result of count is 1, 1 is more than 0,
so count = 1 + Bet (1 Bet)
*/
/*
console.log(ac(4)); */

var myDog = { /* this is javascript Object */
	"name": "Quincy", /* "name": is property of myDog object */
	"legs": 2, /* 2 is value of legs property in myDog object */
	"tails": 1,
	"friends": ["nothing"]
};
/*
console.log(myDog); */

var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

var hatValue = testObj.hat; /*this is how to accessing object properties with dot/period(.) notation */
var shirtValue = testObj.shirt; /* write the property name of the object. now shirtValue variable value is jersey */
/*
console.log(hatValue); */

var testObject = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

var entreeValue = testObject["an entree"]; /*this is how to accessing object properties with bracket notation */
var drinkValue = testObject['the drink']; /* write the property name of the object. now drinkValue variable value is water */
/*
console.log(entreeValue); */

var testObjectx = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16; /* make variable with the value of properties object */
var player = testObjectx[playerNumber]; /* access properties object by the value of variable that has been created before */
/*
console.log(player); */

myDog.name = "Shiro"; /* this is how to updating object properties using dot notaion */
/* now the name properties would change to Shiro from Quincy */
/*
console.log(myDog); */

myDog["bark"] = "woof!"; /* add new properties to an object with bracket notation */
/* now the properties of myDog object would add 1 properties and value, that's bark = woof */
/*
console.log(myDog); */

delete myDog.tails; /* delete a properties of an object with delete keyword */
/*
console.log(myDog); */

function phoneticLookup(val) {
	var result = "";
	
	var lookup = { /* use object for lookups instead of switch case statement */
		"alpha": "Adams",
		"bravo": "Boston",
		"charlie": "Chicago",
		"delta": "Denver",
		"echo": "Easy",
		"foxtrot": "Frank"
	};
	
	result = lookup[val];
/* using object for lookups with bracket notation. object lookup and what its passed by the paramater (val) value in object properties
its gonna be the value of the result from the properties value of lookup object */
	
	return result;
}
/*
console.log(phoneticLookup("charlie")); */

var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp) {
	if (myObj.hasOwnProperty(checkProp)) { /* hasOwnProperty method used for testing objects properties */
		return myObj[checkProp]; /* if the value passed by checkProp parameter is same as the properties in myObj object, return that properties value */
	} else { /* if not, return not found. because there is no properties that match with the value passed by */
		return "Not found"
	}
}
/*
console.log(checkObj("pet")); */

var myMusic = [ /* this is an array (1 array, 2 object in myMusic variable) */
{ /* this is an object */
	"artist": "Billy Joel", /* there's an object in array */
	"title": "Piano Man",
	"release_year": 1973,
	"formats": [ /* there's an array in a object properties */
	"CD",
	"8T",
	"LP"
	],
	"gold": true
}, /* end first object */

{ /* this is second object in array */
	"artist": "Beau Carnes",
	"title": "Cereal Man",
	"release_year": 2003,
	"formats": [
	"Youtube"
	]
} /* end second object */
] /* end of an array */
/*
console.log(myMusic); */

var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

var gloveBoxContents = myStorage.car.inside["glove box"]; /* when accessing properties name with space( ) naming it should use bracket notation [] */
/* this is how to access value inside nested object */
/*
console.log(gloveBoxContents); */

var myPlants = [
{ /* first object in array */
	type: "flowers",
	list: [
	"rose",
	"tulip",
	"dandelion"
]
},
{ /* second object in array */
	type: "trees",
	list: [
	"fir",
	"pine",
	"birch"
	]
}
];

var secondTree = myPlants[1].list[2];
/* select object, then which array index, then which properties name, then which array index to select/access */
/*
console.log(secondTree); */

var collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
		"Let It Rock",
		"You Give Love a Bad Name"
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
		"1999",
		"Little Red Corvette"
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": []
	},
	"5439": {
		"album": "ABBA Gold"
	}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	if (value === "") {
		delete collection[id][prop]; /* used to delete properties and value IF the value passed by paramater is empty string */
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || []; /* IF the id and prop passed by parameter is SAME as in the value properties selected and when the VALUE is new/not same in the value properties itself OR the target properties VALUE is EMPTY string, then add/push new value to the propertes */
		collection[id][prop].push(value); /* used to add/push new value to the properties */
	} else {
		collection[id][prop] = value; /* if the id prop and value is SAME as in the object properties and values, not change/update/delete anything */
	}
	/* if the prop is ARTIST OR ALBUM, the properties value itself would be override it with new value passed by parameter */
	/* if the prop name is not same/new in that id properties, add/push new prop (properties) and value (value) in it */
	return collection;
};

updateRecords(1245, "tracks", "Baby"); /* add/push new value in 1245 tracks properties */
updateRecords(5439, "artist", "BABA"); /* add/push new properties and value to the 5439 properties */
updateRecords(5439, "tracks", "BEBE"); /* add/push new properties and value to the 5439 properties */
updateRecords(2468, "artist", "Jeremy"); /* override 2468 artist value with Jeremy */
updateRecords(2548, "tracks", "Bad Love"); /* add/push new value to the 2548 tracks properties value */
updateRecords(2468, "tracks", ""); /* delete 2468 tracks properties and value */
/*
console.log(updateRecords(1245, "artist", "Robert Palmer")); */

var myArrayWhile = [];
var i = 0;

while(i < 5) {
	myArrayWhile.push(i);
	i++; /* 0+1=1, 1+1=2, 2+1=3, 3+1=4 */
}
/*
console.log(myArrayWhile); */

var ourArrayFor = [];

for(var i = 0; i < 5; i++) { /* initializitation, condition, and incrementing in 1 parentheses */
	ourArrayFor.push(i);
}
/*
console.log(ourArrayFor); */

var ourArrayOdd = [];

for(var i = 0; i < 10; i += 2) { /* 0+2=2, 2+2=4, 4+2=6, 6+2=8 */
	ourArrayOdd.push(i);
}
/*
console.log(ourArrayOdd); */

var ourArrayBackward = [];

for(var i = 10; i > 0; i -= 2) { /* 10-2=8, 8-2=6, 6-2=4, 4-2=2 */
	ourArrayBackward.push(i);
}
/*
console.log(ourArrayBackward); */

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for(var i = 0; i < ourArr.length; i++) { /* i < 4 */
	ourTotal += ourArr[i]; /* 0 = 0+9=9(run first i=0 (index 0 is 9) in array, then now ourTotal is 9, 9 = 9+10=19(because i=0+1=1(index 1 is 10) in array */
}
/*
console.log(ourTotal); */

/* not understand yet */
function multiplyAll(arr) {
	var product = 1;
	
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr[i].length; j++) {
			product *= arr[i][j]; /* run first i=0, j=0 (index i=0 is first index in array, then index j=1 is first value in array is 1 */
			/* 1*1=1. i=0, j=0+1=1 (first index, second value in array is 2) 1*2=2 */
		}
	}
	
	return product;
}
 var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
 /*
 console.log(product); */
 
var myArrayDo = [];
var iDo = 10;

do {
	myArrayDo.push(iDo); /* add new array(10) to the myArrayDo */
	iDo++; /* 10+1=11 */
} while (iDo < 5) /* 11 < 5 = false, stop looping */
/*
console.log(iDo, myArrayDo); */

/* not understand yet */
var contacts = [
{
	"firstName": "Akira",
	"lastName": "Laine",
	"number": "0543236543",
	"likes": ["Pizza", "Coding", "Brownie Points"]
},
{
	"firstName": "Harry",
	"lastName": "Potter",
	"number": "0994372684",
	"likes": ["Hogwarts", "Magic", "Magrid"]
},
{
	"firstName": "Sherlock",
	"lastName": "Holmes",
	"number": "0487345643",
	"likes": ["Intriguing Cases", "Violin"]
}
];

function lookUpProfile(name, prop) {
	for(var i = 0; i < contacts.length; i++) {
		if(contacts[i].firstName === name) { /* if the firstName value is same as the value passed by the name paramater, then output the value */
			return contacts[i][prop] || "No such property";
		}
	}
	return "No such contact";
}

var data = lookUpProfile("Akira", "likes");
/*
console.log(data); */

function randomFraction() {
	return Math.random(); /* generate random fraction/decimal number with zero first number (can't never be 1) */
}
/*
console.log(randomFraction()); */

function randomWholeNumber() {
	return Math.floor(Math.random() * 10); /* round down to the nearest whole number. randow number * 10 = xx, then round the number to the nearest whole number(non decimal between 0-9) */
}
/*
console.log(randomWholeNumber()); */

function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
	/* get the random number. then multiply it to the result of mymax-mymin+1, then the result all of it + mymin */
	/* the result is between 10 to 20 number */
}

var myRandom = randomRange(10, 20);
/*
console.log(myRandom); */

function convertToInteger(str) {
	return parseInt(str); /* convert string to integer, beside that return NaN */
}
/*
console.log(convertToInteger("10"));
console.log(convertToInteger(true)); */

function convertFromBinary(str) {
	return parseInt(str, 2) /* use the parseInt function with a Radix. convert base 2 to base 10 */
/* radix specifies the base of the number in the . base 2 = binary, base 7, base 8, default base 10 = integer (0-99) */
}
/*
console.log(convertFromBinary("11001")); */

function checkEqual(a, b) {
	return a === b ? true : false;
/* is same as
if(a === b) {
	return true;
}
else {
	return false;
}

	and

return a === b;
*/
}
/*
console.log(checkEqual(1, 2)); */

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
/* if num > 0 then print positive, else if num < 0 then print negative, else print zero */
}
/*
console.log(checkSign()); */

function checkScope() {
	"use strict";
/*	var i = "function scope"; /* declare globally (all block statement can access it) */
	let i = "function scope"; /* declare limited to the block statement (ontly this block statement) */
	if (true) {
/*		i = "block scope"; /* if it is use var(or not use var/let/const then it'll set automatically be global), it will override "function scope" to this value */
	let i = "block scope"; /* if it is use let, the variable will limited(wouldn't override) to this block statement {} */
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}
/*
console.log(checkScope()); */

function printManyTimes(str) {
	"use strict";
	
	const SENTENCE = str + " is cool!"; /* const should use all CAPITAL letter */
	
/*	SENTENCE = str + " is amazing!"; /* const cannot be re-assign its value (read-only). */
	
	for(let i = 0; i < str.length; i+=2) { /* always use const and let in a real program to prevent problem */
		console.log(SENTENCE);
	}
	return SENTENCE;
}
/*
console.log(printManyTimes("Demmy")); */

const S = [5, 7, 2];
function editInPlace() {
	"use strict";
	
/*	S = [2, 5, 7]; /* cannot re-assign/mutate a variable declare by const */
	S[0] = 2; /* but we can re-assign/mutate it by used bracket notation */
	S[1] = 5;
	S[2] = 7; 
}
editInPlace();
/*
console.log(S); */

function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};
	/*
	Object.freeze(MATH_CONSTANTS); /* use to freeze an object (prevent the item in the object to change) */
	
	try {
		MATH_CONSTANTS.PI = 99;
	}
	catch ( ex ) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
/*
console.log(freezeObj()); */

/* not understand yet */
const MAGIC = () => new Date(); /* use arrow functions to write concise anonymous functions */
/* is same as 
const MAGIC = function() {
	return new Date();
};
*/
/*
console.log(MAGIC); */

const MYCONCAT = (arr1, arr2) => arr1.concat(arr2); /* use arrow functions with parameters */
/* is same as
var myConcat = function(arr1, arr2) {
	return arr1.concat(arr2);
};
*/
/*
console.log(MYCONCAT([1,2],[3,4,5])); */

/* not understand yet */
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => { /* write higher order arrow functions */
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
/*
console.log(squaredIntegers); */

const increment = (function() { /* this is default function. write higher order arrow functions */
	return function increment(number, value = 1) {
		return number + value;
	};
})();
/*
console.log(increment(5,5));
console.log(increment(5)); */

/* not understand yet */
const SUM = (function() {
	return function SUM(...args) { /* used the rest operator with function parameter */
/* is same as
	return function sum(x, y, z) {
		const args = [x, y, z]; /* convert these into an array */
		return args.reduce((a, b) => a + b, 0);
	};
	})();
/*
console.log(SUM(1, 2, 3)); /* it can alose add any number of numbers in it */

/* not understand yet */
const ARR1 = ["JAN","FEB","MAR","APR","MAY"];
let ARR2;
(function() {
	ARR2 = [...ARR1]; /* use the spread operator to evaluate arrays in-place. it expands/spread out in already existing array */
	/* ARR2 equal all of the contents of ARR1 */
	ARR1[0] = "what"
})();
/*
console.log(ARR2); */

var voxel = { x: 3.6, y: 7.4, z: 6.54 }; /* this is an object */

/*
var x = voxel.x; /* this is an old way to destructing variable from object *//*
var y = voxel.y;
var z = voxel.z; /* z = 6.54 */
const { x : aaa, y : bbb, z : ccc } = voxel; /* a = 3.6, b = 7.4, c = 6.54 */

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
	"use strict";
	
	const { tomorrow : tempOfTomorrow } = avgTemperatures; // tempOfTomorrow = 79 from tomorrow AVG_TEMPERATURES object
	return tempOfTomorrow;
}
/*
console.log(getTempOfTmrw(AVG_TEMPERATURES)); */

const LOCAL_FORECAST = {
	today: { min: 72, max: 83 },
	tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
	"use strict";
	
	const { tomorrow : { max : maxOfTomorrow }} = forecast;
	// tomorrow.max = maxOfTomorrow from forecast object
	return maxOfTomorrow;
}
/*
console.log(getMaxOfTmrw(LOCAL_FORECAST)); */

const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // use , , to destructing specific assignment from arrays
/*
console.log(z, x, y); */

let aA = 8, bB = 6;
(() => { // not understand yet
"use strict";
[aA, bB] = [bB, aA]
})();
/*
console.log(aA);
console.log(bB); */

const SOURCE = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
	
	const [ , , ...arr] = list; /* use destructing assignment with the rest operator */
	// , , used to remove the first two elements in array
	return arr;
}

const arr = removeFirstTwo(SOURCE);
/*
console.log(arr);
console.log(SOURCE); */

const stats = {
	max: 56.76,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -9.75,
	average: 35.85
};

const half = (function() {
	return function half({ max, min }) { // use destructing assignment to pass an object as a functions parameters. just take/get what it need (not all the properties)
		return (max + min) / 2.0;
	};
})();
/*
console.log(stats);
console.log(half(stats)); */
	
const person = {
	name: "Zodiac",
	age: 50
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
// this is how to create strings using template literals. it can use enter space, use variable to get data value in it
/*
console.log(greeting); */

const resultLiteral = {
	success: ["max-length", "no amd", "prefer-arrow-function"],
	failure: ["no-var", "var-on-top", "line-break"],
	skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
	const resultDisplayArray = [];
	for (let i = 0; i < arr.length; i++) {
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`) // automatically add/push the array based on the target array in object
	// run first 0 = no-var, 0+1=1 = var-on-top, 1+1=2 = line-break
	}
	return resultDisplayArray;
}
const resultDisplayArray = makeList(resultLiteral.failure); // arr parameter passed by resultLiteral.failure because it must return the value in it
/*
console.log(resultDisplayArray); */

const createPerson = (name, age, gender) => ( { name, age, gender } );
/* is same as
return {
	name: name, // name properties would be assign by name passed by parameter
	age: age,
	gender: gender
};
*/
/*
console.log(createPerson("Zodiac", 50, "Male")); */


	
	
	
	
	
	
	
	
	
	
	
	