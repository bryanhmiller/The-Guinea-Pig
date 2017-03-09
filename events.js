var targetDiv = document.getElementById("output-target");
var pageTitleMouseEvent = document.getElementById("page-title");
var keyBoardEvent = document.getElementById("keypress-input");
var addColorButton = document.getElementById("add-color");

// 1. When any section is clicked the output target text should be "You clicked on 
// the {text of the section} section" 
function clickedSectionIdentifier(event){
	console.log(event.target);
	if (event.target.className === "article-section") {
		targetDiv.innerHTML = "<h2>" + "You clicked on the " + event.target.innerHTML + " section." + "</h2>";
	}	
}

// 2. When the mouse is over the h1 tag, the output element should contain the text 
// "You moved your mouse over the header".
function pageTitleActionEnter() {
	console.log(event.target);
	targetDiv.innerHTML = "<h2>You moved your mouse over the header</h2>";
}	

// 3. When the mouse leaves the h1 tag, the output element should contain the text 
// "You left me!!".	
function pageTitleActionLeave() {
	console.log(event.target);
	targetDiv.innerHTML = "<h2>You left me!!</h2>";
}	

// 4. When you type characters into the input field, the output element should mirror the 
// text in the input field.
function typedInput() {
	console.log(event.target.value);
	targetDiv.innerHTML = "<h1>" + keyBoardEvent.value; + "</h1>";
}

// 5. When you click the "Add color" button, the guinea-pig element's text color should 
// change to blue.
function colorChange() {
	targetDiv.innerHTML += targetDiv.classList.add("color-me-blue");
}

document.body.addEventListener("click", clickedSectionIdentifier);
pageTitleMouseEvent.addEventListener("mouseenter", pageTitleActionEnter);
pageTitleMouseEvent.addEventListener("mouseleave", pageTitleActionLeave);
keyBoardEvent.addEventListener("keyup", typedInput);
addColorButton.addEventListener("click", colorChange);