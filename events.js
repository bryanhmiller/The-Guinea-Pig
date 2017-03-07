var targetDiv = document.getElementById("output-target");
var pageTitleMouseEvent= document.getElementById("page-title");


// 1. When any section is clicked the output target text should be "You clicked on 
// the {text of the section} section" 
function clickedSectionIdentifier(event){
	console.log(event.target);
	if (event.target.className === "article-section") {
		targetDiv.innerHTML = "<h2>" + "You clicked on the " + event.target.innerHTML + " section." + "</h2>"
	}	
}

// 2. When the mouse is over the h1 tag, the output element should contain the text 
// "You moved your mouse over the header".
// 3. When the mouse leaves the h1 tag, the output element should contain the text 
// "You left me!!".	
function pageTitleAction() {
	console.log(event.target);
}	

pageTitleMouseEvent.addEventListener("mouseenter", pageTitleAction);
pageTitleMouseEvent.addEventListener("mouseleave", pageTitleAction);
document.body.addEventListener("click", clickedSectionIdentifier);