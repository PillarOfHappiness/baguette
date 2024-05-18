//If you include jq src in head for some reason
$(document).ready( () => {      //Loads the whole html page before executing the js file
    $("h1").css("color","red"); // DOM document.querySelect("h1").style.color = "red";
});

// console.log($("h1"));   //returns some kind of array idk

$("h1").text("Bye World"); // DOM textContent ? idk
// $("h1").style.textContent = "ok" // Doesn't work uh

$("button").html("<em> Hey </em>"); //DOM innerHTML? (em is italics)

//one param is get, two param is set//////////////////////////////////////////////////////////
// console.log($("img").attr("src"));

$("a").css("color", "orange");
$("a").attr("href","https://www.yahoo.com");

// console.log($("h1").attr("class"));

//add event listener alternatives
// $("h1").click(() => {
//     $("h1").css("color", "purple");
// });
$("button").click(function(){
    $("h1").css("color","purple");
});


$("input").keydown((event) => { //updates when one key is pressed
    $("h1").text(event.key);
});

// $("h1").on("mouseover", () => {
//     $("h1").css("color","yellow");
// })

//adding html code directly from you js code
$("p").before("<small>before</small>");     // above
$("p").prepend("<small>prepend </small>");  // behind
$("p").append("<small> append</small>");    // in front

//WEBSITE ANIMATION
$("button").click(() => {
    $("h1").animate({opacity: .5});
});

