// VARIABLES

// create variable and assign value
var carName = "Volvo";
console.log(carName);
var x = 50;
console.log(x);

// display sum of two variables
var x = 5;
var y = 10;
//document.getElementById("demo").innerHTML = x + y;

// display result in alert box
var x = 5;
var y = 10;
var z = x + y;
//alert(z);

// declatr multiple variables on single line
var firstName = "joe", lastName = "Schmoe", age = 24;

// math operators and alert results
// multiply
//alert(10 * 5);
// divide
//alert(10 / 5);
// find remainder
//alert(10 % 5);

// use += assignment operator for shorthand
x = 10;
y = 5;
x += y; // equal to 15
// alternate form:
x = x + y;

// same syntax for multiplication
x *= y

// and subtraction
x -= y;




// DATA TYPES


var length = 16; // Number
var lastName = "Johnson"; // String
var x = {
    firstName: "Joe",
    lastName: "Schmoe"
}; // Object



// FUNCTIONS


// create and execute function
function myFunction(){
    console.log("Hello World!");
}
myFunction();

// make function return "Hello"
function myFunction(){
    return "Hello";
}

// make function display "Hello" in the inner HTML
// of element with ID "demo"
function myFunction(){
    //document.getElementById("demo").innerHTML = "Hello";
}





// OBJECTS


// create Object and extract info from it
var person = {
    firstName: "Joe",
    lastName: "Schmoe",
    country: "Norway"
};
// display the firstName element
console.log(person.firstName);


// create Object and display elements of Object inside text
var person = {
    name: "Joe", age: 50
};
console.log(person.name + " is " + person.age);





// EVENTS


// create <button> element and alert when clicked
//<button onclick="alert('Hello')">Click me.</button>

// execute function when <button> element is clicked
//<button onclick="myFunction()">Click me.</button>

// make div element turn red when mouse is over it
//<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>





// STRINGS


// find length of String with length property
var txt = "Hello World!";
var x = txt.length;
console.log(x);

// use escape characters for quotes or other special characters inside String
var txt = "We are the \"Vikings\".";
console.log(txt);

// concatenate two Strings
var str1 = "Hello ";
var str2 = "World!";
console.log(str1 + str2);






// METHODS

// find indexOf() method to find index of character in String
var txt = "abcdefghijkl"
var pos = txt.indexOf("h");
console.log(pos);

// use slice method to return word in String at a specific index range
var txt = "I can eat bananas all day";
var x = txt.slice(10,17);
console.log(x);

// use replace method to place word in String
var txt = "Hello World";
var x = txt.replace("Hello","Welcome");
console.log(x);

// convert String to upper case
var txt = "Hello World";
var x = txt.toUpperCase;
console.log(x);

// convert String to lower case
var txt = "Hello World";
var x = txt.toLowerCase;
console.log(x);





// ARRAYS


// create array and get a specific value using index
var cars = ["Saab", "Volvo", "BMW"];
var x = cars[1];
console.log(x);

// change item in array at index
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Fiat";
console.log(cars);

// display number of items in array
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars.length);

// remove last item in array
var cars = ["Saab", "Volvo", "BMW"];
cars.pop();
console.log(cars);

// add item to array
var cars = ["Saab", "Volvo", "BMW"];
cars.push("Renault");
console.log(cars);

// remove items of array at index points
var cars = ["Saab", "Volvo", "BMW", "Renault"];
cars.splice(1,2);
console.log(cars);

// sort items in array alphabetically
var cars = ["Saab", "Volvo", "BMW"];
cars.sort();
console.log(cars);






// DATES

// create a Date object and display current date and time
var d = new Date;
console.log(d);

// extract the full year (4 digits) out of Date object
var d = new Date;
year = d.getFullYear();
console.log(year);

// extract the month (0-11) out of Date object
// month index starts at 0, so Jan=0, Feb=1, etc.
var d = new Date;
month = d.getMonth();
console.log(month);

// set a new year to the Date object
var d = new Date;
d.setFullYear(2021);
console.log(d);





// MATH

// create random number between 0-1
var r = Math.random();
console.log(r);

// return largest of two numbers
var x = Math.max(10,20);
console.log(x);

// round number to nearest integer
// rounds up at .5
var x = Math.round(5.5);
console.log(x);

// find square root of number
var x = Math.sqrt(9);
console.log(x);
