var whichSectionGotClicked = document.getElementsByClassName("article-section");
var targetDiv = document.getElementById("output-target");
console.log(whichSectionGotClicked);

function myFunction(event){
	console.log(event.target.innerHTML);
	targetDiv.innerHTML = "<h2>" + "You clicked on the " + event.target.innerHTML + " section." + "</h2>"
}


document.body.addEventListener("click", myFunction);