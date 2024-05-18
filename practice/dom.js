alert("Sup April 10");

//Dom Tree: HTML -> Head --> meta meta title -> Body --> H1 etc etc
document.firstElementChild; //get html tag
document.firstElementChild.firstElementChild; //get head
//DOM -> HTML -> body -> ul
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.textContent = "something";

//Instead of innerHTML use textContent

//querySelector (accessing parts of your HTML code)
let elem = document.querySelector(".class");
elem.textContent = "querySelector";

//querySelector (selects same way as css)
let ele = document.querySelector("li a"); //when there are duplicates it will only affect the first? !test (remove the a)
ele.style.color = "green";

//adding classes (turning on and off classes??? wuttttt thats wild (dis tru))
let el = document.querySelector("button").classList.add("huge"); //assuming class huge has css styling 
document.querySelector("button").classList.toggle("huge"); //turn it off
document.querySelector("button").classList.toggle("huge"); //turn it back on

//setting anchor tag: links
let e = document.querySelector("a").attributes; //returns a set of attributes in a list
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.google.com");

//querySelectorAll: return an array with all the elements with a particular tag
let em = document.querySelectorAll("li");

//* side note an element could have two classes (denoted by a space)

//event
document.querySelector(".w").addEventListener("click", drum);

//playing audio?
var audio = new Audio("file_name.mp3");
audio.play();