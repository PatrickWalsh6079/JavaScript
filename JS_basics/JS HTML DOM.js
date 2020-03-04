// JavaScript HTML DOM
/*
The Document Object Model (DOM) is a programming interface 
for HTML and XML documents. The Document Object Model (DOM) 
represents that same document so it can be manipulated. The DOM 
is an object-oriented representation of the web page, which can 
be modified with a scripting language such as JavaScript.
*/

// use the getElementById method to find the <p> element
// and change its text to "Hello".

//<p id="demo"></p>
//document.getElementById("demo").innerHTML = "Hello";



// Use the getElementsByTagName method to find the first <p> element, 
// and change its text to "Hello".
//<p id="demo"></p>
//document.getElementsByTagName("p")[0].innerHTML = "Hello";


// Change the text of the first p element with the class name "test".
//<p class="test"></p>
//document.getElementsByClassName("test")[0].innerHTML = "New txt";



// Change the value of the image's src attribute
//<img id="image" src="smiley.gif"></img>
//document.getElementById("image").src = "new_image.jpg";



// Change value of the input field
//<input type="text" id="myText" value="Hello there"></input>
//document.getElementById("myText").value = "General Kenobi!";



// Change the text color of the <p> element to red.
//<p id="demo"></p>
//document.getElementById("demo").style.color = "red";



// Change the font size of the <p> element to 40 pixels.
//<p id="demo"></p>
//document.getElementById("demo").style.fontSize = "40px";



// Use the CSS display property to hide the <p> element
//<p id="demo"></p>
//document.getElementById("demo").style.display = "none";



// Use eventListener to assign an onclick event to the <button> element
//<button id="demo">Click me!</button>
//document.getElementById("demo").addEventListener("click", myFunction);
